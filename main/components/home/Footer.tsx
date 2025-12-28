import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full bg-emerald-50 mt-20 lg:mt-32">
      <div className="px-6 pt-10 lg:pt-16 lg:pb-8 pb-5 max-w-[1200px] flex flex-col gap-8 lg:gap-12 lg:mx-auto">
        <div className="flex flex-wrap lg:justify-between items-start w-full gap-8">
          <div className="space-y-2 lg:space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-emerald-600">
              OquEasyDSA
            </h2>
            <p className="text-neutral-600 text-sm lg:max-w-92 font-normal lg:font-medium mb-4 lg:mb-0">
              Empowering students with expert knowledge about Data Structures
              and Algorithms with success in competitive programming.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-medium text-neutral-800">
              Main Menu
            </h3>
            <div className="flex flex-col gap-1 font-normal lg:font-medium lg:gap-2">
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                About us
              </Link>
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                Our Vision
              </Link>
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                Login
              </Link>
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                Product &amp; Services
              </Link>
            </div>
          </div>
          <div className="space-y-2 lg:space-y-3">
            <h3 className="text-base font-medium text-neutral-800">
              Take Action
            </h3>
            <div className="flex flex-col gap-1 font-normal lg:font-medium lg:gap-2">
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                Login
              </Link>
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                Signup
              </Link>
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                See Course
              </Link>
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                Read Documentation
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-medium text-neutral-800">
              Our Policy
            </h3>
            <div className="flex flex-col gap-1 font-normal lg:font-medium lg:gap-2">
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                Information
              </Link>
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                Privacy Policy
              </Link>
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                Terms of Service
              </Link>
              <Link
                href={"#"}
                className="text-sm text-neutral-500 hover:text-neutral-600 active:text-neutral-600"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
        <hr className="h-[0.5px] bg-neutral-200 w-full" />
        <div className="flex justify-between flex-wrap items-center w-full gap-6">
          <p className="text-sm font-normal text-neutral-600">
            &copy; 2025 OquEasy. All rights reserved.
          </p>
          <div className="flex gap-2 items-center">
            <Link
              href={"#"}
              className="flex items-center justify-center p-2 rounded-full border border-neutral-600 bg-transparent hover:border-emerald-500 hover:bg-emerald-500 transition-colors"
            >
              <Facebook className="fill-neutral-800 text-neutral-800 size-4" />
            </Link>
            <Link
              href={"#"}
              className="flex items-center justify-center p-2 rounded-full border border-neutral-600 bg-transparent hover:border-emerald-500 hover:bg-emerald-500 transition-colors text-emerald-50 hover:text-emerald-500 active:text-emerald-500"
            >
              <Instagram className=" fill-neutral-800 size-4" />
            </Link>
            <Link
              href={"#"}
              className="flex items-center justify-center p-2 rounded-full border border-neutral-600 bg-transparent hover:border-emerald-500 hover:bg-emerald-500 transition-colors"
            >
              <Linkedin className="fill-neutral-800 size-4" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:gap-8 text-sm font-normal text-neutral-600">
            <Link href={"#"}>Terms &amp; Conditions</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
