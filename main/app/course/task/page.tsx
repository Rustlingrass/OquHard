import AsideContent from "@/components/course/AsideContent";
import ChapterContent from "@/components/course/ChapterContent";
import ChapterInfo from "@/components/course/ChapterInfo";
import ChapterNavbar from "@/components/course/ChapterNavbar";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import TaskContent from "@/components/course/TaskContent";
import TaskInfo from "@/components/course/TaskInfo";
import UpdateHeader from "@/components/course/UpdateHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export default async function Page() {
  return (
    <div className="font-geist">
      <SidebarProvider defaultOpen className="flex flex-col font-geist">
        <AsideContent chapter={"No chapter, a coding challenge"}>
          <UpdateHeader />
          <TaskInfo />
          <TaskContent />
        </AsideContent>
      </SidebarProvider>
    </div>
  );
}
