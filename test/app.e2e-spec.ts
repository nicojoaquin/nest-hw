import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { useAppMiddlewares } from '../utils';
import { AppModule } from '../src/app.module';

describe('App e2e', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    useAppMiddlewares(app);

    await app.init();
  });

  afterAll(() => {
    app.close();
  });

  it.todo('should pass');
});
