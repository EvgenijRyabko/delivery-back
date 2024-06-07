import 'dotenv/config';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  await app.listen(process.env.APP_PORT);
}

bootstrap().then(() => {
  console.log(`App started at port ${process.env.APP_PORT}`);
});