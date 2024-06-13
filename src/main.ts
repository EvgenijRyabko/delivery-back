import 'dotenv/config';

import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const formattedErrors = errors.map((error) => ({
          field: error.property,
          message: error.constraints
            ? Object.values(error.constraints)
            : 'Validation failed',
        }));

        return new BadRequestException({
          statusCode: 400,
          message: 'Validation failed',
          errors: formattedErrors,
        });
      },
      stopAtFirstError: false,
    }),
  );

  await app.listen(process.env.APP_PORT || 'localhost');
}

bootstrap().then(() => {
  console.log(`App started at port ${process.env.APP_PORT}`);
});
