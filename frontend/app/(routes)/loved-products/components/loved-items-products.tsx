import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/products";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
    product : ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props;
    const router = useRouter();
    const {removeLovedItem} = useLovedProducts();
    const {addItem} = useCart();

    const addToCheckout = () => {
        addItem(product);
        removeLovedItem(product.id);
    }

    return (
    <li className="flex py-6 border-b"> 
    <div onClick={() => router.push('/product/${product.slug}')}>
        <img
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
        alt="Product"
        className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"/>
    </div>
    <div className="flex justify-between flex-1 px-6">
        <div>
            <div>
                <h2>{product.productName}</h2>
                <p className="font-bold">{formatPrice(product.price)}</p>
<div className="flex flex-col gap-4 mt-3">
  <div className="flex items-center">
    <p className="px-4 py-2 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
      {product.category.categoryName}
    </p>
  </div>
<div className="flex gap-4 mt-5">
  <Button className="rounded-full" onClick={addToCheckout}>
    Añadir al carrito
  </Button>
  <Button
    className={cn(
      "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-100 transition"
    )}
    onClick={() => removeLovedItem(product.id)}
  >
    <X size={20} />
  </Button>
</div>
    </div>
            </div>
        </div>
    </div>
    </li>
    );
};

export default LovedItemProduct;
