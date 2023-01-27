import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useAppMiddlewares } from '../utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useAppMiddlewares(app);

  await app.listen(3001);
  console.log(`Server initialized in ${await app.getUrl()}`);
}
bootstrap();
