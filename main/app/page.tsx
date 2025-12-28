import Navbar from "@/components/home/Navbar";
import Image from "next/image";
import person1 from "@/assets/images/boy1.jpg";
import person2 from "@/assets/images/boy2.jpg";
import person3 from "@/assets/images/girl2.jpg";
import arrow from "@/assets/images/curvyarrow.svg";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Modules from "@/components/home/Modules";
import Info from "@/components/home/Info";
import Info2 from "@/components/home/Info2";
import ReviewsSlider from "@/components/home/ReviewsSlider";
import Action from "@/components/home/Action";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import AuthDialog from "@/components/auth/AuthDialog";
// import NewsBar from "@/components/NewsBar";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-geist">
      <Navbar />
      <main className="flex flex-col my-9 lg:my-10 gap-14 lg:gap-25">
        <AuthDialog />
        <Hero />
        <Info />
        <Modules />
        <Info2 />
        <ReviewsSlider />
        <Action />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
