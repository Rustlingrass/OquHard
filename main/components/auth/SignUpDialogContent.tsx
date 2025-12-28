import google from "@/assets/images/google.svg";
import { useAuthDialogStore } from "@/lib/useDialogStore";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SignUpDialogContent() {
  const setDialogType = useAuthDialogStore((state) => state.setDialogType);
  return (
    <main className="p-2 flex flex-col gap-6">
      <button className="w-full cursor-pointer flex items-center justify-center px-4 py-2 sm:py-2.5 sm:gap-2 gap-1.5 rounded-md border-2 border-neutral-200 hover:border-neutral-300 active:border-neutral-300 transition-colors">
        <Image src={google} alt="google" className="size-6" />
        <h3 className="text-sm font-medium text-neutral-800">Google</h3>
      </button>
      <div className="flex items-center gap-1">
        <hr className="h-[0.5px] rounded-full text-neutral-200 w-full mt-0.5" />
        <h3 className="text-xs font-normal text-neutral-600">Or</h3>
        <hr className="h-[0.5px] rounded-full text-neutral-200 w-full mt-0.5" />
      </div>
      <form className="space-y-4 w-full">
        <div className="space-y-1.5">
          <h3 className="text-sm font-medium pl-0.5 text-neutral-800">Name</h3>
          <input
            type="text"
            placeholder="John Doe"
            className=" focus-within:outline-0 w-full focus-within:border-neutral-300 focus-within:bg-neutral-50 px-4 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 active:border-neutral-300 text-sm font-normal text-neutral-800 transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-sm font-medium pl-0.5 text-neutral-800">Email</h3>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            required
            className=" focus-within:outline-0 w-full focus-within:border-neutral-300 focus-within:bg-neutral-50 px-4 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 active:border-neutral-300 text-sm font-normal text-neutral-800 transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-sm font-medium pl-0.5 text-neutral-800">
            Password
          </h3>
          <input
            type="password"
            placeholder="• • • • • • • •"
            required
            className=" focus-within:outline-0 placeholder:text-base w-full focus-within:border-neutral-300 focus-within:bg-neutral-50 px-4 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 active:border-neutral-300 text-sm font-normal text-neutral-800 transition-colors"
          />
        </div>
        <div className="flex flex-col w-full gap-4 mt-8 lg:mt-12 sticky">
          <button
            type="submit"
            className="w-full flex items-center gap-1.5 lg:gap-2 justify-center rounded-md px-4 py-2.5 lg:py-2.5 text-xs lg:text-sm font-medium bg-emerald-500 hover:bg-emerald-500/90 active:bg-emerald-500/90 transition-colors text-white cursor-pointer"
          >
            Create Account
            <ArrowRight className="size-3.5 lg:size-4" strokeWidth={1.9} />
          </button>
          <p className="text-xs font-normal text-neutral-600 text-center select-none">
            Already have an account?{" "}
            <span
              className="text-neutral-800 hover:text-neutral-800/90 active:text-neutral-700 cursor-pointer"
              onClick={() => setDialogType("signin")}
            >
              Log In
            </span>
          </p>
        </div>
      </form>
    </main>
  );
}
