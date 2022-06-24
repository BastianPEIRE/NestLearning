import { NestFactory } from '@nestjs/core';
import { parentPort } from 'worker_threads';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
