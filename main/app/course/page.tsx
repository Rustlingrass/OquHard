import Breadnav from "@/components/course/Breadnav";
import CourseInfoContent from "@/components/course/CourseInfoContent";
import CourseInfoHeader from "@/components/course/CourseInfoHeader";
import CourseNavbar from "@/components/course/CourseNavbar";
import LearnAction from "@/components/course/LearnAction";
import Footer from "@/components/home/Footer";

const currentPaths = [
  {
    path: "Home",
    link: "/",
    active: false,
  },
  {
    path: "Course",
    link: "/course",
    active: true,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full font-geist">
      <CourseNavbar />
      <main className="py-6 lg:py-10 space-y-8 lg:grid lg:grid-cols-[0.69fr_0.31fr] lg:max-w-7xl lg:gap-2 lg:mx-auto">
        <div className="space-y-5">
          <Breadnav paths={currentPaths} />
          <CourseInfoHeader />
          <CourseInfoContent />
        </div>
        <LearnAction />
      </main>
      <Footer />
    </div>
  );
}
