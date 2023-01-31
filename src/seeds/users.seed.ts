import { PrismaClient, Role } from '@prisma/client';

export const seedUsers = async (prisma: PrismaClient) => {
  return Promise.all([
    prisma.user.upsert({
      where: { email: 'nicojoaquin1998@gmail.com' },
      update: {},
      create: {
        email: 'nicojoaquin1998@gmail.com',
        password: 'nico1234',
        roles: Role.ADMIN,
        profile: {
          create: {
            firstName: 'Nicolás',
            lastName: 'Joaquin',
            posts: {
              create: {
                title: 'Post',
              },
            },
          },
        },
      },
    }),
    prisma.user.upsert({
      where: { email: 'nico@nico1.com' },
      update: {},
      create: {
        email: 'nico@nico1.com',
        password: 'nico1234',
        roles: [Role.USER, Role.ADMIN],
        profile: {
          create: {
            firstName: 'Nico',
            lastName: 'Joaquin',
            posts: {
              create: {
                title: 'Post nico',
              },
            },
          },
        },
      },
    }),
  ]);
};
