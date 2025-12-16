import { ProductType } from "@/types/products"
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface CartStore {
    items: ProductType[]
    addItem: (data: ProductType) => void
    removeItem: (id:number) => void
    removeAll: ()   => void
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItems = currentItems.find(item => item.id === data.id)

        if(existingItems) {
            return toast({
                title: "El producto ya existe en el carrito.",
                variant: "destructive",
            })
}
        set({
            items: [...get().items, data]
        })

        toast({
            title: "Producto agregado al carrito."
        })
    },
    removeItem: (id: number) => {
        set({ items:[...get().items.filter(item => item.id !== id)]})
        toast({
            title: "Producto eliminado del carrito."
        })
    },
    removeAll: () => set({ items: [] }),
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
}))

export type { CartStore }
// Simple toast implementation using browser alerts as a placeholder.
// Replace with your preferred toast/notification library as needed.
function toast({ title, variant }: { title: string; variant?: string }): void {
    // You can enhance this to use a UI toast library like react-hot-toast or notistack.
    alert(`${variant === "destructive" ? "[Error] " : ""}${title}`);
}

