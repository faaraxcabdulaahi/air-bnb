import { create } from "zustand";
import { IAuthModalStoreProps } from "@/types/types";

export const useAuthModal = create<IAuthModalStoreProps>((set) => ({
  isLoginOpen: false,
  isRegisterOpen: false,

  openLogin: () => set({ isLoginOpen: true, isRegisterOpen: false }),

  openRegister: () => set({ isRegisterOpen: true, isLoginOpen: false }),

  closeLogin: () => set({ isLoginOpen: false }),

  closeRegister: () => set({ isRegisterOpen: false }),

  closeAll: () => set({ isLoginOpen: false, isRegisterOpen: false }),
}));
