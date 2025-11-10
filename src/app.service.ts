import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Versão 251110-0955 separar BD dev(docker local) e stg(neon.com)';
  }
}
