import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/products";
import { Heart } from "lucide-react";

export type InfoProductProps = {
    product: ProductType;
}

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props;
    const { addItem } = useCart();
    const { addLoveItem} = useLovedProducts();
   

    return (
        <div className="px-6">
        <div className="flex flex-col gap-3 mb-3">
            <h1 className="text-2xl">{product.productName}</h1>
            <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                {product.category.categoryName}
            </p>
            <Separator className="my-4" />
            <p>{product.description}</p>
            <Separator className="my-4" />
            <p className="my-4 text-2xl">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-5">
                <Button className="w-full"onClick={() => addItem(product)}>Comprar</Button>
<button
  type="button"
  className="p-0 bg-transparent border-none hover:bg-transparent"
  onClick={() => addLoveItem(product)} 
  aria-label="Agregar a favoritos"
>
  <Heart width={24} strokeWidth={1.5} className="text-gray-700 hover:fill-black transition" />
</button>
            </div>
        </div>
        </div>
    )
}

export default InfoProduct;