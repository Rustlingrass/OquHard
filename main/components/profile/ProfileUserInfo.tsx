export default function ProfileUserInfo() {
  return (
    <section className="p-6 space-y-5 bg-linear-to-br from-stone-100/80 via-gray-100 to-slate-100 rounded-md">
      <h3 className="text-base font-semibold text-neutral-800">
        User Information
      </h3>
      <div className="space-y-1.5 lg:space-y-2">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-neutral-500">Username</p>
          <p className="text-sm font-normal text-neutral-800">Margs The Dev</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm font-medium text-neutral-500">Role</p>
          <p className="text-sm font-normal text-neutral-800">Student</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-neutral-500">Comments</p>
          <p className="text-sm font-normal text-neutral-800">32</p>
        </div>
      </div>
    </section>
  );
}
