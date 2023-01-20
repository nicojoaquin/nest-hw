import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { useAppMiddlewares } from '../utils';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import * as pactum from 'pactum';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();

    useAppMiddlewares(app);

    await app.init();

    prisma = app.get(PrismaService);

    prisma.cleanDb();
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    describe('Signup', () => {
      it.todo('should signup');
    });
    describe('Signin', () => {});
    describe('Signout', () => {});
  });

  describe('User', () => {
    describe('Get user', () => {});
    describe('Edit user', () => {});
  });

  describe('Profile', () => {
    describe('Get profle', () => {});
    describe('Edit profle', () => {});
  });

  describe('Post', () => {
    describe('Create post', () => {});
    describe('Get posts', () => {});
    describe('Get post', () => {});
    describe('Edit post', () => {});
    describe('Delete post', () => {});
  });
});
