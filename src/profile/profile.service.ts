import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { EditProfileDto } from './dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  getProfile(userId: User['id']) {
    return this.prisma.profile.findUnique({ where: { userId } });
  }

  editProfile(userId: User['id'], dto: EditProfileDto) {
    return this.prisma.profile.update({
      where: { userId },
      data: {
        ...dto,
      },
    });
  }
}
