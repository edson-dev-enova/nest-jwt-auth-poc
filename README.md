
# POC JWT Authentication with NestJS

## TODO

* swagger
* confirmacao de email
* envio de link para troca de senha
* 2FA
* refresh token

## Serviços

* **API** — aplicação principal em Node + NestJS.
* **PostgreSQL** — banco de dados relacional.

## Ambiente DEV

O ambiente de desenvolimento utiliza **Docker Compose** para subir 2 containers:
* Banco de Dados PostgreSql
* Aplicação API Rest

## Pré-requisitos

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

## Subindo o ambiente

```bash
docker compose up -d
```
* Isso iniciará todos os containers necessários.
* Migrations roda automaticamente e cria/altera as tabelas no BD.

## Acesso aos serviços

### PostgreSql
Acessar o console do PostgreSql
```bash
docker exec -it nest-jwt-auth-db psql -U dev -d mydb
```
Rodar os comandos de sql
```bash
select * from users;
```

### Swagger
!!! A SER IMPLEMENTADO !!!

## Testando a API

* **hello world**: [http://localhost:3001](http://localhost:3001)
* **criar um user**: [http://localhost:3001/auth/register](http://localhost:3001/auth/register)

### para rodar no host
iniciar a aplicação localmente com:
```bash
pnpm start:dev
```
e, depois trocar a posta de 3001 para 3000
* **hello world**: [http://localhost:3000](http://localhost:3000)
* **criar um user**: [http://localhost:3000/auth/register](http://localhost:3000/auth/register)

## Encerrando os containers

```bash
docker compose down
```

Isso remove os containers, mas mantém volumes e dados persistidos.

# Repositório e Hospedagem

* **GitHub**: [https://github.com/edson-dev-enova/nest-jwt-auth-poc]
* **API hospedado em**: [https://nest-jwt-auth-poc.onrender.com]
* **PostgreSql hospedado em**: [https://neon.com/]

# Deploy
O deploy é disparado com commit e/ou push para brach **develop**, conforme configuração no render.com




<!-- 


## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE). -->
