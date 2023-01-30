import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUser(id: User['id']) {
    return this.prisma.user.findFirst({
      where: { id },
      include: { profile: true },
    });
  }

  async editUser(userId: User['id'], dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        ...dto,
      },
    });

    delete user.password;

    return user;
  }
}
