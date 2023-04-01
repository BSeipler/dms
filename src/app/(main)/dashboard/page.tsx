import AnnouncementCard from '@/app/components/dashboard/AnnouncementCard';

export default function Dashboard() {
  return (
    <div>
      <h1 className="p-6 text-2xl">Announcements</h1>
      <div className="flex flex-wrap justify-center">
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
      </div>
    </div>
  );
}
