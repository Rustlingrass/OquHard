export default function TaskInfo() {
  return (
    <header className="w-full lg:max-w-[960px] lg:mx-auto lg:mt-4 font-geist">
      <div className="px-5 py-4 flex flex-col gap-1 lg:gap-1.5">
        <div className="flex items-center flex-wrap gap-2 lg:gap-2.5">
          <h3 className="text-sm font-normal lg:font-medium text-neutral-600">
            Section 3
          </h3>
          <span className="text-base lg:text-lg font-bold text-neutral-500">
            ·
          </span>
          <h3 className="text-sm lg:font-medium font-normal text-neutral-600">
            Chapter 4 of 5
          </h3>
          <span className="text-base lg:text-lg font-bold text-neutral-500">
            ·
          </span>
          <h3 className="text-sm lg:font-medium font-normal text-neutral-600">
            Task 1 of 2
          </h3>
          <span className="text-xs p-1 px-2 rounded-md ml-1 bg-yellow-100 text-yellow-600 font-normal">
            Medium
          </span>
        </div>
        <h2 className="text-xl lg:text-3xl font-semibold text-neutral-800">
          Palindrome Number
        </h2>
      </div>
    </header>
  );
}
