import { INestApplication, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import { useContainer } from 'class-validator';
import { AppModule } from 'src/app.module';

export const useAppMiddlewares = (app: INestApplication) => {
  app.use(cookieParser());

  //Use validations in all app
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  //Make validation constraints injectable
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  //Handle errors
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
};
