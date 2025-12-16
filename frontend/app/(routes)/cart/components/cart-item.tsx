import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/products";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export function formatPrice(price: number): string {
    return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });
}

interface CartItemProps {
    product: ProductType
}

const CartItem =(props: CartItemProps) => {
    const { product } = props;
    const router = useRouter();
    const {removeItem} = useCart();
    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.slug}`)}>
                <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images?.[0]?.url}`}
                    alt="Product"
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold">{formatPrice(product.price)}</p>
                    <div className="flex item-center justify-between gap-3">
                        <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                          {product.category.categoryName}  
                        </p>
                    </div>
                    </div>
                    <div>
                        <button className={cn("rounded-full flex item-center justify-center bg white border shadow-md p-1 hover:scale-100 transition")}>
                            <X size={10} onClick={()=> removeItem(product.id)} />
                        </button>
                    </div>
                </div>
        </li>
    );
}

export default CartItem;