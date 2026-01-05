import AsideContent from "@/components/course/AsideContent";
import ChapterContent from "@/components/course/ChapterContent";
import ChapterInfo from "@/components/course/ChapterInfo";
import ChapterNavbar from "@/components/course/ChapterNavbar";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import UpdateHeader from "@/components/course/UpdateHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;
  return (
    <div>
      <SidebarProvider defaultOpen className="flex flex-col font-geist">
        <AsideContent chapter={chapter}>
          <UpdateHeader />
          <ChapterInfo />
          <ChapterContent />
        </AsideContent>
      </SidebarProvider>
    </div>
  );
}
