import { Info } from "lucide-react";
import Link from "next/link";

export default function UpdateHeader() {
  return (
    <header className="w-full flex justify-center items-center gap-2.5 bg-blue-50 px-4 py-2.5 lg:py-4">
      <div className="size-5 shrink-0 flex items-center justify-center p-2 rounded-full bg-blue-500 text-white font-medium select-none">
        <p className="text-sm">i</p>
      </div>
      <h3 className="text-sm font-normal text-neutral-800">
        This course has been updated, please check the details of the course.
      </h3>
      <Link
        className="text-indigo-700 underline text-sm font-medium"
        href={"#"}
      >
        Click Here
      </Link>
    </header>
  );
}
