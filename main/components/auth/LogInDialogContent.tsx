import google from "@/assets/images/google.svg";
import github from "@/assets/images/github.svg";
import { LogInDataSchema, LogInDataType } from "@/lib/types";
import { useAuthDialogStore } from "@/lib/useDialogStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import InputErrorMessage from "./InputErrorMessage";
import { Spinner } from "../ui/spinner";
import {
  emailLogIn,
  githubSocialSignIn,
  googleSocialSignIn,
} from "@/lib/callbacks";
import { useUserStore } from "@/lib/userStore";
import { Toast } from "@base-ui/react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LogInDialogContent() {
  const setDialogType = useAuthDialogStore((state) => state.setDialogType);
  const setUserData = useUserStore((state) => state.setUserData);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInDataType>({ resolver: zodResolver(LogInDataSchema) });

  const onSubmit = handleSubmit(async (formData) => {
    startTransition(async () => {
      const signedin = await emailLogIn(formData, setUserData);
      if (signedin) router.push("/course");
    });
  });

  return (
    <main className="p-2 flex flex-col gap-6">
      <div className="flex gap-2">
        <button
          onClick={googleSocialSignIn}
          className="w-full cursor-pointer flex items-center justify-center px-4 py-2 sm:py-2.5 sm:gap-2 gap-1.5 rounded-md border-2 border-neutral-200 hover:border-neutral-300 active:border-neutral-300 transition-colors"
        >
          <Image src={google} alt="google" className="size-5.5 lg:size-6" />
          <h3 className="text-sm font-medium text-neutral-800">Google</h3>
        </button>
        <button
          onClick={githubSocialSignIn}
          className="w-full cursor-pointer flex items-center justify-center px-4 py-2 sm:py-2.5 sm:gap-2 gap-1.5 rounded-md border-2 border-neutral-200 hover:border-neutral-300 active:border-neutral-300 transition-colors"
        >
          <Image src={github} alt="google" className="size-5.5 lg:size-6" />
          <h3 className="text-sm font-medium text-neutral-800">Github</h3>
        </button>
      </div>
      <div className="flex items-center gap-1">
        <hr className="h-[0.5px] rounded-full text-neutral-200 w-full mt-0.5" />
        <h3 className="text-xs font-normal text-neutral-600">Or</h3>
        <hr className="h-[0.5px] rounded-full text-neutral-200 w-full mt-0.5" />
      </div>
      <form className="space-y-4 w-full" onSubmit={onSubmit}>
        <div className="space-y-1.5">
          <h3 className="text-sm font-medium pl-0.5 text-neutral-800">Email</h3>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            {...register("email")}
            className=" focus-within:outline-0 w-full focus-within:border-neutral-300 focus-within:bg-neutral-50 px-4 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 active:border-neutral-300 text-sm font-normal text-neutral-800 transition-colors"
          />
          {errors.email && (
            <InputErrorMessage>{errors.email.message}</InputErrorMessage>
          )}
        </div>
        <div className="space-y-1.5">
          <h3 className="text-sm font-medium pl-0.5 text-neutral-800">
            Password
          </h3>
          <input
            type="password"
            placeholder="• • • • • • • •"
            {...register("password")}
            className=" focus-within:outline-0 placeholder:text-base w-full focus-within:border-neutral-300 focus-within:bg-neutral-50 px-4 py-2 rounded-md border border-neutral-200 hover:border-neutral-300 active:border-neutral-300 text-sm font-normal text-neutral-800 transition-colors"
          />
          {errors.password && (
            <InputErrorMessage>{errors.password.message}</InputErrorMessage>
          )}
        </div>
        <div className="flex flex-col w-full gap-4 mt-10 lg:mt-12 sticky">
          <button
            type="submit"
            className="w-full  flex items-center gap-1.5 lg:gap-2 justify-center rounded-md px-4 py-2.5 lg:py-2.5 text-xs lg:text-sm font-medium bg-emerald-500 disabled:bg-emerald-500/70 hover:bg-emerald-500/90 active:bg-emerald-500/90 transition-colors text-white cursor-pointer"
            disabled={isPending}
          >
            {isPending && <Spinner />}
            Log In
            <ArrowRight className="size-3.5 lg:size-4" strokeWidth={1.9} />
          </button>
          <p className="text-xs font-normal text-neutral-600 text-center select-none">
            Don&apos;t have an account?{" "}
            <span
              className="text-neutral-800 hover:text-neutral-800/90 active:text-neutral-700 cursor-pointer"
              onClick={() => setDialogType("signup")}
              aria-disabled={isPending}
            >
              Sign Up
            </span>
          </p>
          <p className="text-xs font-normal text-neutral-600 text-center select-none">
            Forgot Password?{" "}
            <span
              className="text-neutral-800 hover:text-neutral-800/90 active:text-neutral-700 cursor-pointer"
              aria-disabled={isPending}
              onClick={() => setDialogType("forgotpassword")}
            >
              Restore
            </span>
          </p>
        </div>
      </form>
    </main>
  );
}
