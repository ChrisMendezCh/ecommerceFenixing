import { ProductType } from "@/types/products";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';

interface UseLovedProductsType {
    lovedItems: ProductType[];
    addLoveItem: (data: ProductType) => void;
    removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create<UseLovedProductsType>()(
    persist(
        (set, get) => ({
            lovedItems: [],
            addLoveItem: (data: ProductType) => {
                const currentLovedItems = get().lovedItems;
                const existingItem = currentLovedItems.find((item) => item.id === data.id);

                if (existingItem) {
                    return toast({
                        title: "El producto ya existe en la lista",
                        variant: "destructive"
                    });
                }

                set({
                    lovedItems: [...get().lovedItems, data]
                });
                toast({
                    title: "Producto añadido a la lista"
                });
            },
            removeLovedItem: (id: number) => {
                set({ lovedItems: get().lovedItems.filter((item) => item.id !== id) });
                toast({
                    title: "Producto eliminado de la lista",
                });
            },
        }),
        {
            name: "Loved-products-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
// Simple toast implementation using browser alerts as a placeholder.
// Replace with your preferred toast/notification library as needed.
function toast({ title, variant }: { title: string; variant?: string }): void {
    // You can enhance this to use a UI toast library like react-hot-toast or notistack.
    alert(`${variant === "destructive" ? "[Error] " : ""}${title}`);
}

export type { UseLovedProductsType };
