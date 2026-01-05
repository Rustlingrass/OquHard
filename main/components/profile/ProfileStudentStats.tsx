export default function ProfileStudentStats() {
  return (
    <section className="p-6 space-y-5 bg-linear-to-br from-stone-100/80 via-gray-100 to-slate-100 rounded-md">
      <h3 className="text-base font-semibold text-neutral-800">
        User Statistics
      </h3>
      <div className="space-y-1.5 lg:space-y-2">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-neutral-500">Date Joined</p>
          <p className="text-sm font-normal text-neutral-800">6 months ago</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm font-medium text-neutral-500">
            Course points earned
          </p>
          <span className="text-xs p-1 px-2 rounded-sm bg-emerald-500 text-white font-medium tracking-wide flex items-center gap-1">
            182
          </span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-neutral-500">
            Tasks completed
          </p>
          <p className="text-sm font-normal text-neutral-800">46</p>
        </div>
      </div>
    </section>
  );
}
