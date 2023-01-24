import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { ProfileService } from './profile.service';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { User } from '../auth/decorators/user.decorator';
import { EditProfileDto } from './dto';

@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  getProfile(@User() user: UserModel) {
    return this.profileService.getProfile(user.id);
  }

  @Put('update')
  editProfile(@User() user: UserModel, @Body() dto: EditProfileDto) {
    return this.profileService.editProfile(user.id, dto);
  }
}
