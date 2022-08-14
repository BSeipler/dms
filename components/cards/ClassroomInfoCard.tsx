type Props = {
  classroomId: number;
  category: string;
  ratio: string;
  capacity: number;
  enrolled: number;
  checkedIn: number;
  teachers: number;
};

export default function ClassroomInfoCard({
  classroomId,
  category,
  ratio,
  capacity,
  enrolled,
  checkedIn,
  teachers,
}: Props) {
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Room {classroomId}
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Category
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 mb-5">
            {category}
          </dd>
          <dt className="text-sm font-medium text-gray-500 truncate">Ratio</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 mb-5">
            {ratio}
          </dd>
          <dt className="text-sm font-medium text-gray-500 truncate">
            Capaciy
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 mb-5">
            {capacity}
          </dd>
          <dt className="text-sm font-medium text-gray-500 truncate">
            Enrolled
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 mb-5">
            {enrolled}
          </dd>
          <dt className="text-sm font-medium text-gray-500 truncate">
            Checked In
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 mb-5">
            {checkedIn}
          </dd>
          <dt className="text-sm font-medium text-gray-500 truncate">
            Teachers
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900 mb-5">
            {teachers}
          </dd>
        </div>
      </dl>
    </div>
  );
}
