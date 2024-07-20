import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app
    .listen(process.env.PORT ? Number(process.env.PORT) : 3000, '0.0.0.0')
    .then(() => console.log('App running on port 3000'));
}
bootstrap();
