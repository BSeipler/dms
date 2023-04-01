import AnnouncementCard from '@/app/components/dashboard/AnnouncementCard';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Dashboard() {
  const announcements = await prisma.announcement.findMany();

  return (
    <div>
      <h1 className="p-6 text-2xl">Announcements</h1>
      <div className="flex flex-wrap justify-center">
        {announcements.map((announcement) => {
          return (
            <AnnouncementCard
              key={announcement.id}
              title={announcement.title}
              content={announcement.content}
              author={announcement.author}
            />
          );
        })}
      </div>
    </div>
  );
}
