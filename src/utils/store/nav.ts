import { create } from "zustand";

interface NavStore {
  isOpen: boolean;
  onChange: (val: boolean) => void;
}

const useNavStore = create<NavStore>((set) => ({
  isOpen: false,
  onChange: (val: boolean) => set(() => ({ isOpen: val })),
}));

export default useNavStore;
