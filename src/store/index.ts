import { create } from 'zustand';

interface MacbookStore {
  color: string;
  setColor: (color: string) => void;
  scale: number;
  setScale: (scale: number) => void;
  reset: () => void;
  texture: string;
  setTexture: (texture: string) => void;
}

const useMacbookStore = create<MacbookStore>((set) => {
  return {
    color: '#2e2c2e',
    setColor: (color: string) => set({ color }),

    scale: 0.08,
    setScale: (scale: number) => set({ scale }),

    texture: `${import.meta.env.BASE_URL}videos/feature-1.mp4`,
    setTexture: (texture: string) => set({ texture }),

    reset: () => set({ color: '#2e2c2e', scale: 0.08 }),
  };
});

export default useMacbookStore;
