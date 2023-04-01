import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.announcement.createMany({
      data: [
        {
          title: 'Important Announcement 1',
          content: 'This is the content of the first important announcement.',
          authorId: 'user_2NkGIbSTrFZGSDQBpD17cGGU7r3',
          author: 'bseipler',
        },
        {
          title: 'Important Announcement 2',
          content: 'This is the content of the second important announcement.',
          authorId: 'user_2NkGIbSTrFZGSDQBpD17cGGU7r3',
          author: 'bseipler',
        },
        {
          title: 'Important Announcement 3',
          content: 'This is the content of the third important announcement.',
          authorId: 'user_2NkGIbSTrFZGSDQBpD17cGGU7r3',
          author: 'bseipler',
        },
      ],
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
