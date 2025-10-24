import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProductType } from '@/types/product';
import { toast } from 'sonner';


interface LovedProductsType {
    lovedItems: ProductType[],
    addLoveItem: (data: ProductType) => void,
    removeLovedItem: (id: number) => void,
}

export const useLovedProducts = create(persist<LovedProductsType>((set, get) => ({
    lovedItems: [],
    addLoveItem: (data: ProductType) => {
        const currentLovedItem = get().lovedItems;
        const existingItem = currentLovedItem.find((item) => item.id === data.id);

        if (existingItem) {
            toast.error("Already in cart", {
                description: "This item is already in your shopping cart"
            });
            return;
        }

        set({
            lovedItems: [...get().lovedItems, data]
        });

        toast.success("Added to favorite list", {
            description: `${data.product_name} has been added to your favorite list`
        });

    },
    removeLovedItem: (id: number) => {
        set({ lovedItems: [...get().lovedItems.filter((item) => item.id !== id)] })
        toast.success("Product removed from favorite list")
    },

}), {
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage)
}))
