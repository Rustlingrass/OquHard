import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import ProfileActivity from "@/components/profile/ProfileActivity";
import ProfileCourseProgress from "@/components/profile/ProfileCourseProgress";
import ProfileHero from "@/components/profile/ProfileHero";
import ProfileStudentStats from "@/components/profile/ProfileStudentStats";
import ProfileTitle from "@/components/profile/ProfileTitle";
import ProfileUserInfo from "@/components/profile/ProfileUserInfo";

export default function Page() {
  return (
    <div className="min-h-screen w-full font-geist">
      <Navbar className="lg:max-w-6xl lg:px-6" />
      <div className="lg:max-w-6xl lg:mx-auto px-6 py-8 lg:py-14 space-y-6 lg:space-y-8">
        <ProfileTitle />
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="space-y-8">
            <ProfileHero />
            <ProfileUserInfo />
          </div>
          <div className="space-y-8">
            <ProfileCourseProgress />
            <ProfileStudentStats />
          </div>
        </div>
        <ProfileActivity />
      </div>
      <Footer />
    </div>
  );
}
