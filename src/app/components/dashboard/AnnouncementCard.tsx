interface AnnouncementCardProps {
  title: string;
  content: string;
  author: string;
}

export default function AnnouncementCard({ title, content, author }: AnnouncementCardProps) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow max-w-xs m-5">
      <div className="px-4 py-5 sm:px-6 font-bold">{title}</div>
      <div className="px-4 py-5 sm:p-6">{content}</div>
      <div className="flex px-4 py-4 sm:px-6 justify-between">
        <p>{author}</p>
        <a href="/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
          Read More
        </a>
      </div>
    </div>
  );
}
