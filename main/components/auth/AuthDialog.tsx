"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuthDialogStore } from "@/lib/useDialogStore";
import React, { useState } from "react";
import LogInDialogContent from "./LogInDialogContent";
import SignUpDialogContent from "./SignUpDialogContent";

export default function AuthDialog() {
  const authDialogOpen = useAuthDialogStore((state) => state.authDialogOpen);
  const setAuthDialogOpen = useAuthDialogStore(
    (state) => state.setAuthDialogOpen
  );
  const dialogType = useAuthDialogStore((state) => state.dialogType);
  return (
    <Dialog open={authDialogOpen} onOpenChange={setAuthDialogOpen}>
      <DialogContent className="font-geist sm:p-8 sm:max-w-116 sm:pt-10 pt-7">
        <DialogHeader className="sm:text-center">
          {/* <div className="flex flex-col select-none items-center w-full">
            <h2 className="font-bold text-base lg:text-lg text-emerald-600/80 text-pretty">
              OquEasy
            </h2>
          </div> */}
          <DialogTitle>
            {dialogType === "signin"
              ? "Log In to Account"
              : dialogType === "signup"
              ? "Create an Account"
              : dialogType === "forgotpassword"
              ? "Forgot Password"
              : "Confirm Code"}
          </DialogTitle>
          <DialogDescription>
            {dialogType === "signin"
              ? "Welcome back! Please sign in to continue."
              : dialogType === "signup"
              ? "Get started with OquEasy today."
              : dialogType === "forgotpassword"
              ? "Don't worry, enter the account email to continue."
              : "Please, type the confirmation code to continue."}
          </DialogDescription>
        </DialogHeader>
        {dialogType === "signin" ? (
          <LogInDialogContent />
        ) : (
          <SignUpDialogContent />
        )}
      </DialogContent>
    </Dialog>
  );
}
