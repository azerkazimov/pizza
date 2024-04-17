import { create } from "zustand";

const useCardStore = create((set) => ({
  card: [],
  addToCard: (product) => set((state) => ({ card: [...state.card, product] })),
  removeFromCard: (productId) =>
    set((state) => ({
      card: state.card.filter((prod) => prod.id !== productId),
    })),
  clearCard: () => set({ card: [] }),
}));

export default useCardStore;
