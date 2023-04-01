export default function AnnouncementCard() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow max-w-xs m-2">
      <div className="px-4 py-5 sm:px-6 font-bold">Important Announcement 1</div>
      <div className="px-4 py-5 sm:p-6">
        This is the content of the first important announcement.
      </div>
      <div className="flex px-4 py-4 sm:px-6 justify-between">
        <p>@BSeipler</p>
        <a href="/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
          Read More
        </a>
      </div>
    </div>
  );
}
