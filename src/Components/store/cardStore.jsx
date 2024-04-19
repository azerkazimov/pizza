import { create } from "zustand";

const useCardStore = create((set) => ({
  card: [],
  addToCard: (product) =>
    set((state) => {
      const existingProductIndex = state.card.findIndex(
        (prod) => prod.id === product.id
      );

      switch (existingProductIndex) {
        case -1:
          return { card: [...state.card, product] };
        default:
          const updatedCard = [...state.card];
          updatedCard[existingProductIndex].quantity += product.quantity || 1;
          return { card: updatedCard };
      }
    }),
  removeFromCard: (productId) =>
    set((state) => ({
      card: state.card.filter((prod) => prod.id !== productId),
    })),
  clearCard: () => set({ card: [] }),
}));

export default useCardStore;
