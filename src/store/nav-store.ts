import { create } from "zustand";

export type NavStoreType = {
  currentSection: string;
  setCurrentSection: (currentSection: string) => void;
};

export const NavStore = create<NavStoreType>()((set: any, get) => ({
    currentSection: "",
    setCurrentSection: (currentSection: string) => set(() => ({ currentSection })),
}));
