import { create, ExtractState } from "zustand";
import { combine } from "zustand/middleware";
import { UserType } from "./types";

export type AuthDialogStoreType = ExtractState<typeof useUserStore>;

export const useUserStore = create(
  combine(
    {
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      name: "",
      email: "",
      emailVerified: false,
      image: "",
    },
    (set) => ({
      setUserData: (userData: UserType) => set(userData),
      setUserVerified: (verified: boolean) =>
        set((state) => ({ emailVerified: verified })),
    })
  )
);
