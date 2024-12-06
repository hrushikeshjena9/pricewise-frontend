import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const cart = get().cart;
        const existingItem = cart.find((cI) => cI.product_id === item.id);

        if (existingItem) {
          set({
            cart: cart.map((cI) =>
              cI.product_id == item.id ? { ...cI, qty: cI.qty + 1 } : cI
            ),
          });
        } else {
          set({
            cart: [
              ...cart,
              { qty: 1, product_id: item.id, product_details: { ...item } },
            ],
          });
        }
      },

      removeFromCart: (id) =>
        set({
          cart: get().cart.filter((item) => item.product_id !== id),
        }),
        updateCart: (id, action) => {
            const cart = get().cart;
          
            if (action === "add") {
              set({
                cart: cart.map((cI) =>
                  cI.product_id === id ? { ...cI, qty: cI.qty + 1 } : cI
                ),
              });
              return;
            }
          
            if (action === "sub") {
              const updatedCart = cart.map((cI) =>
                cI.product_id === id
                  ? { ...cI, qty: cI.qty - 1 }
                  : cI
              ).filter(cI => cI.qty > 0); // Remove items with qty <= 0
          
              set({
                cart: updatedCart,
              });
              return;
            }
          },
          
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
