import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProductType } from "@/types/product";
import { toast } from "sonner"

interface CartStore {
    items: ProductType[],
    userId: number | null,
    addItem: (data: ProductType) => void
    removeItem: (id: number) => void
    removeAll: () => void
    setUserId: (id: number | null) => void
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    userId: null,
    addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
            toast.error("Already in cart", {
                description: "This item is already in your shopping cart"
            });
            return;
        }

        set({ items: [...get().items, data] });

        toast.success("Added to cart", {
            description: `${data.product_name} has been added to your cart`
        });
    },
    removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Product removed from cart");
    },

    removeAll: () => set({ items: [] }),
    setUserId: (id: number | null) => set({ userId: id })
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))