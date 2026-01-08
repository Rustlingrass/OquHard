import AdminPanelHeader from "@/components/admin/AdminPanelHeader";
import MainFileSection from "@/components/admin/MainFileSection";
import StructureSide from "@/components/admin/StructureSide";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="h-auto w-full font-geist bg-neutral-50">
      <Navbar className="lg:max-w-[1360px] lg:px-6" />
      <div className="lg:max-w-full lg:grid lg:grid-cols-[0.2fr_0.8fr] lg:place-content-center lg:mx-auto py-8 lg:py-4 space-y-6 lg:space-y-8">
        <div className="hidden lg:block h-full">
          <StructureSide />
        </div>
        <div className={"lg:hidden"}>
          <AdminPanelHeader>
            <StructureSide />
          </AdminPanelHeader>
        </div>
        <MainFileSection />
      </div>
      <Footer className="lg:mt-24" />
    </div>
  );
}
