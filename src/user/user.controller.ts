import { Controller, Get, UseGuards } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { User } from 'src/auth/decorators';
import { JwtGuard } from '../auth/guard/jwt.guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('get-one')
  getUser(@User() user: UserModel) {
    return user;
  }
}
