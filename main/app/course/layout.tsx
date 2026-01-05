import CourseNavbar from "@/components/course/CourseNavbar";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OquHard | Course Page",
  description: "Algorithms and Data Structures explained and simplified",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children};</div>;
}
