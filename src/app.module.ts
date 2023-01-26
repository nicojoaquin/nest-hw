import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './api-key/api-key.guard';
import { ApiKeyModule } from './api-key/api-key.module';
import { ProfileModule } from './profile/profile.module';
import { PostModule } from './posts/posts.module';
import {
  IsAlreadyExistConstraint,
  IsNotExistConstraint,
} from './decorators/exists.decorator';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ApiKeyModule,
    PrismaModule,
    AuthModule,
    UserModule,
    ProfileModule,
    PostModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
    IsAlreadyExistConstraint,
    IsNotExistConstraint,
  ],
})
export class AppModule {}
