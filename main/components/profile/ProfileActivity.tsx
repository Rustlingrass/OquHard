import { Paragraph } from "../course/TaskDescription";
import { Separator } from "@base-ui/react/separator";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Trophy } from "lucide-react";
import Link from "next/link";

// 1. Minimal data shape with only the requested fields
interface Activity {
  id: string;
  title: string;
  date: string;
  level: string | null;
  type: string;
  time: number;
  category: string;
}

const activities: Activity[] = [
  {
    id: "1",
    title: "Text structure and purpose | Lesson",
    category: "SAT Reading and Writing",
    type: "lesson",
    date: "Dec 02, 2025 at 5:44 PM",
    level: null,
    time: 10,
  },
  {
    id: "2",
    title: "Text structure and purpose | Lesson",
    category: "SAT Reading and Writing",
    type: "lesson",
    date: "Dec 02, 2025 at 4:12 PM",
    level: null,
    time: 5,
  },
  {
    id: "3",
    title: "Text structure and purpose | Lesson",
    category: "SAT Reading and Writing",
    type: "lesson",
    date: "Dec 02, 2025 at 2:37 PM",
    level: null,
    time: 5,
  },
  {
    id: "4",
    title: "Text structure and purpose | Lesson",
    category: "SAT Reading and Writing",
    type: "lesson",
    date: "Dec 02, 2025 at 1:39 PM",
    level: null,
    time: 1,
  },
  // Added a challenge example to show how the 'level' field would look
  {
    id: "5",
    title: "Advanced Algebra | Challenge",
    category: "SAT Math",
    type: "challenge",
    date: "Dec 01, 2025 at 10:00 AM",
    level: "Hard",
    time: 15,
  },
  {
    id: "6",
    title: "Advanced Algebra | Challenge",
    category: "SAT Math",
    type: "challenge",
    date: "Dec 01, 2025 at 10:00 AM",
    level: "Medium",
    time: 15,
  },
];

function ActivityTable() {
  return (
    <div className="w-full rounded-md">
      <Table className=" table-fixed">
        <TableHeader>
          <TableRow className="bg-neutral-100 rounded-sm">
            <TableHead className="w-50 md:w-[40%] text-neutral-500 pl-4 lg:py-3 lg:pl-6">
              ACTIVITY
            </TableHead>
            <TableHead className=" md:w-[30%] text-neutral-500">DATE</TableHead>
            <TableHead className="hidden md:table-cell">LEVEL</TableHead>
            <TableHead className="hidden md:table-cell text-right lg:py-3 lg:pr-6">
              TIME (MIN)
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {activities.map((activity) => (
            <TableRow key={activity.id} className="">
              <TableCell className="font-normal lg:py-4 pl-3 lg:pl-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-neutral-500">
                    {activity.type === "lesson" ? (
                      <FileText className="size-4" />
                    ) : (
                      <Trophy className="size-4" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-neutral-800 text-wrap">
                      {activity.title}
                    </span>
                    <span className="text-sm text-neutral-500 text-wrap">
                      {activity.category}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell className="align-top lg:align-middle text-neutral-600 text-wrap">
                {activity.date}
              </TableCell>

              <TableCell className="hidden md:table-cell align-top lg:align-middle">
                {activity.level ? (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700">
                    {activity.level}
                  </span>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </TableCell>

              <TableCell className="hidden md:table-cell text-right align-top lg:align-middle lg:pr-8">
                {activity.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex gap-4 mt-6 lg:mt-10 lg:ml-4">
        <Link
          href={"#"}
          className="text-base font-medium text-emerald-700 hover:text-emerald-600 visited:text-emerald-600 active:text-emerald-600 transition-colors"
        >
          Previous
        </Link>
        <Separator
          orientation="vertical"
          className="w-0.5 shrink-0 bg-gray-300"
        />
        <Link
          href={"#"}
          className="text-base font-medium text-emerald-700  hover:text-emerald-600 visited:text-emerald-600 active:text-emerald-600 transition-colors"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

function CustomDateRangeDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0">
        <div className="w-full border-b-2 p-6 lg:p-8 px-6">
          <DialogTitle asChild>
            <h2 className="text-base lg:text-xl font-semibold text-stone-800">
              Set a custom range
            </h2>
          </DialogTitle>
        </div>
        <div className="p-6 lg:p-8 lg:pt-3 pt-3 space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-medium pl-0.5 text-neutral-800">From</p>
            <input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              className=" focus-within:outline-0 w-full focus-within:border-neutral-300 focus-within:bg-neutral-50 px-4 py-2.5 rounded-md border border-neutral-200 hover:border-neutral-300 active:border-neutral-300 text-sm font-normal text-neutral-800 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium pl-0.5 text-neutral-800">To</p>
            <input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              className=" focus-within:outline-0 w-full focus-within:border-neutral-300 focus-within:bg-neutral-50 px-4 py-2.5 rounded-md border border-neutral-200 hover:border-neutral-300 active:border-neutral-300 text-sm font-normal text-neutral-800 transition-colors"
            />
          </div>
        </div>
        <DialogFooter className="p-6 border-t-2 border-neutral-200 mt-6 py-6 lg:px-8">
          <DialogClose asChild>
            <button
              type="submit"
              className=" flex items-center gap-1.5 lg:gap-2 justify-center rounded-md px-4 lg:px-8 py-2.5 lg:py-2.5 text-sm lg:text-sm font-medium bg-emerald-500 hover:bg-emerald-500/90 active:bg-emerald-500/90 transition-colors text-white cursor-pointer"
            >
              Confirm
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function AcitivityFilters() {
  return (
    <div className="flex flex-row gap-3 w-full">
      <NativeSelect className="rounded-sm h-10 pl-4 min-w-40 lg:min-w-50 w-full space-y-4 shadow-none">
        <NativeSelectOption value="today">Today</NativeSelectOption>
        <NativeSelectOption value="week">This week</NativeSelectOption>
        <NativeSelectOption value="month">Last 30 days</NativeSelectOption>
        <CustomDateRangeDialog>
          <NativeSelectOption value="custom">Custom range</NativeSelectOption>
        </CustomDateRangeDialog>
      </NativeSelect>
      <NativeSelect className="rounded-sm h-10 pl-4 pr-10 min-w-40 lg:min-w-50 w-full shadow-none">
        <NativeSelectOption value="all">All activities</NativeSelectOption>
        <NativeSelectOption value="lectures">Lectures</NativeSelectOption>
        <NativeSelectOption value="challenges">Challenges</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}

export default function ProfileActivity() {
  return (
    <section className="space-y-6 lg:space-y-8 mt-6 lg:mt-16">
      <div className="lg:space-y-1">
        <h2 className="text-xl lg:text-2xl font-semibold text-neutral-800">
          My progress
        </h2>
        <Paragraph>Latest activity may take 5 mins to show below.</Paragraph>
      </div>
      <div className="space-y-6 lg:flex lg:justify-between lg:items-start">
        <AcitivityFilters />
        <div className="flex gap-4 lg:min-w-max">
          <Paragraph className="">
            <span className="text-xl lg:text-2xl  font-semibold text-neutral-800 mr-0.5">
              37
            </span>{" "}
            challenges solved
          </Paragraph>
          <Separator
            orientation="vertical"
            className="w-px shrink-0 bg-gray-300"
          />
          <Paragraph className="">
            <span className="text-xl lg:text-2xl font-semibold text-neutral-800 mr-0.5">
              402
            </span>{" "}
            total learning min
          </Paragraph>
        </div>
      </div>
      <ActivityTable />
    </section>
  );
}
