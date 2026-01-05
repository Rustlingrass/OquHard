import CourseNavbar from "@/components/course/CourseNavbar";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
