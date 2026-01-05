export default function ProfileTitle() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-lg lg:text-2xl font-semibold text-stone-800">
        My Profile
      </h2>
      <button className="flex tracking-wide items-center gap-1.5 lg:gap-2 justify-center rounded-sm px-6 lg:px-8 py-2 lg:py-2.5 text-sm lg:text-sm font-medium border-[1.5px] text-emerald-600 hover:bg-neutral-50 active:bg-neutral-100 transition-colors bg-transparent cursor-pointer">
        Edit
      </button>
    </div>
  );
}
