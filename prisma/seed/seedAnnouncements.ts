import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed data for Announcements
  await prisma.announcement.createMany({
    data: [
      {
        title: 'Important Announcement 1',
        content: 'This is the content of the first important announcement.',
        authorId: 'user_2NkGIbSTrFZGSDQBpD17cGGU7r3',
      },
      {
        title: 'Important Announcement 2',
        content: 'This is the content of the second important announcement.',
        authorId: 'user_2NkGIbSTrFZGSDQBpD17cGGU7r3',
      },
      {
        title: 'Important Announcement 3',
        content: 'This is the content of the third important announcement.',
        authorId: 'user_2NkGIbSTrFZGSDQBpD17cGGU7r3',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
