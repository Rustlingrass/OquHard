import { create, ExtractState } from "zustand";
import { combine } from "zustand/middleware";

export type AuthDialogStoreType = ExtractState<typeof useAuthDialogStore>;

export const useAuthDialogStore = create(
  combine({ authDialogOpen: false, dialogType: "signup" }, (set) => ({
    setAuthDialogOpen: (open: boolean) => set({ authDialogOpen: open }),
    setAuthDialogOpenImp: () =>
      set((state) => ({ authDialogOpen: !state.authDialogOpen })),
    setDialogType: (type: string) => set({ dialogType: type }),
  }))
);
