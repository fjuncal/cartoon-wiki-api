import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: ['http://localhost:3000/', 'https://cartoon-wiki.vercel.app/'],

    credentials: true,

    methods: 'GET,POST,PUT,DELETE,OPTIONS',
  });
  await app
    .listen(process.env.PORT ? Number(process.env.PORT) : 3000, '0.0.0.0')
    .then(() => console.log('App running on port 3000'));
}
bootstrap();
