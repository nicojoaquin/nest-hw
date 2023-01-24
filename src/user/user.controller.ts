import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { User } from '../auth/decorators';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('get-one')
  getUser(@User() user: UserModel) {
    return user;
  }

  @Put('update')
  editUser(@User() user: UserModel, @Body() dto: EditUserDto) {
    return this.userService.editUser(user.id, dto);
  }
}
