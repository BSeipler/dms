import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.classroom.createMany({
      data: [
        {
          name: 'Classroom 1',
          capacity: 10,
          description: 'Classroom for Infants',
          organizationId: 'org_2NiGLc5P1xDs0mV7JsCpEodWDSW',
        },
        {
          name: 'Classroom 2',
          capacity: 15,
          description: 'Classroom for Younger Toddlers',
          organizationId: 'org_2NiGLc5P1xDs0mV7JsCpEodWDSW',
        },
        {
          name: 'Classroom 3',
          capacity: 15,
          description: 'Classroom for Older Toddlers',
          organizationId: 'org_2NiGLc5P1xDs0mV7JsCpEodWDSW',
        },
        {
          name: 'Classroom 4',
          capacity: 20,
          description: 'Classroom for Younger Two Year Olds',
          organizationId: 'org_2NiGLc5P1xDs0mV7JsCpEodWDSW',
        },
        {
          name: 'Classroom 5',
          capacity: 20,
          description: 'Classroom for Older Two Year Olds',
          organizationId: 'org_2NiGLc5P1xDs0mV7JsCpEodWDSW',
        },
        {
          name: 'Classroom 6',
          capacity: 20,
          description: 'Classroom for Younger Three Year Olds',
          organizationId: 'org_2NiGLc5P1xDs0mV7JsCpEodWDSW',
        },
        {
          name: 'Classroom 7',
          capacity: 20,
          description: 'Classroom for Older Three Year Olds',
          organizationId: 'org_2NiGLc5P1xDs0mV7JsCpEodWDSW',
        },
        {
          name: 'Classroom 8',
          capacity: 20,
          description: 'Classroom for Younger VPK',
          organizationId: 'org_2NiGLc5P1xDs0mV7JsCpEodWDSW',
        },
        {
          name: 'Classroom 9',
          capacity: 20,
          description: 'Classroom for Older VPK',
          organizationId: 'org_2NiGLc5P1xDs0mV7JsCpEodWDSW',
        },
        {
          name: 'Steam Room',
          capacity: 20,
          description: 'Classroom for Steam',
          organizationId: 'org_2NiGLc5P1xDs0mV7JsCpEodWDSW',
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
