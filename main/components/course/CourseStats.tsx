import { Star, Users } from "lucide-react";

export default function CourseStats() {
  return (
    <div className="flex items-center flex-wrap gap-6">
      <div className="flex items-center gap-1 lg:gap-2">
        <Star className="size-4 lg:size-5 fill-yellow-400 text-transparent" />
        <h3 className="text-xs lg:text-sm font-normal text-neutral-600 lg:font-medium">
          4.9 (1,200 ratings)
        </h3>
      </div>
      <div className="flex items-center gap-1 lg:gap-2">
        <Users className="size-4 lg:size-5 fill-neutral-500 text-transparent" />
        <h3 className="text-xs lg:text-sm font-normal text-neutral-600 lg:font-medium">
          3,500 students
        </h3>
      </div>
    </div>
  );
}
