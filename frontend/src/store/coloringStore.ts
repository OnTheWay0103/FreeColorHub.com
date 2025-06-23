import { create } from "zustand";

interface ColoringState {
  selectedPageId: number | null;
  setSelectedPageId: (id: number | null) => void;
}

export const useColoringStore = create<ColoringState>((set) => ({
  selectedPageId: null,
  setSelectedPageId: (id) => set({ selectedPageId: id }),
}));
