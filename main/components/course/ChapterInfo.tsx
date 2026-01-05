export default function ChapterInfo() {
  return (
    <header className="w-full lg:max-w-5xl lg:mx-auto lg:mt-4 font-geist">
      <div className="px-5 py-4 flex flex-col gap-1 lg:gap-1.5">
        <div className="flex items-center gap-2 lg:gap-2.5">
          <h3 className="text-sm font-normal lg:font-medium text-neutral-600">
            Section 3
          </h3>
          <span className="text-base lg:text-lg font-bold text-neutral-500">
            ·
          </span>
          <h3 className="text-sm lg:font-medium font-normal text-neutral-600">
            Chapter 3 of 5
          </h3>
          <span className="text-xs p-1 px-2 rounded-3xl bg-neutral-100 text-neutral-600 fonr-normal">
            Updated
          </span>
        </div>
        <h2 className="text-xl lg:text-2xl font-semibold text-neutral-800">
          Common operations: reverse, merge, detect cycle
        </h2>
      </div>
    </header>
  );
}
