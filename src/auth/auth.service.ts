import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const userExists = await this.usersService.findByEmail(data.email);
    if (userExists) throw new ConflictException('Email já cadastrado');

    const hashed = await bcrypt.hash(data.senha, 10);
    const email = data.email;

    // Gera um token exclusivo para o link de verificação
    const token = this.jwtService.sign(
      { email },
      { expiresIn: '1d' }, // expira em 1 dia
    );

    const user = await this.usersService.create({
      email,
      password: hashed,
      emailChecked: false,
      emailToken: token,
    });

    // Aqui você chamará o envio de e-mail
    // await this.sendVerificationEmail(user.email, token);

    return { message: 'Usuário criado! Verifique seu e-mail para confirmar.' };

    // const user = await this.usersService.create({ ...data, password: hashed });
    return { id: user.id, email: user.email };
  }

  async login(data: LoginDto) {
    const user = await this.usersService.findByEmail(data.email);
    if (!user) throw new UnauthorizedException('Credenciais inválidas');

    const valid = await bcrypt.compare(data.senha, user.password);
    if (!valid) throw new UnauthorizedException('Credenciais inválidas');

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }
}
