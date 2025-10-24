/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
    product: ProductType
}


const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props;
    const router = useRouter();
    const { removeLovedItem } = useLovedProducts();
    const { addItem } = useCart();


    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.slug}`)}>
                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`} alt="product"
                    className="w-24 h-24 overflow-hidden rounded-sm sm:w-auto sm:h-32"
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.product_name}</h2>
                    <p>{formatPrice(product.price)}</p>
                    <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-xs text-primary bg-secondary rounded-full w-fit">{product.brand.brand_name}</p>
                    </div>
                    <Button
                        className="mt-5 rounded-full"
                        onClick={addToCheckout}
                    >Add to cart
                    </Button>
                </div>
                <div>
                    <button className={cn("mt-4 rounded-full flex items-center justify-center text-primary-foreground bg-primary border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeLovedItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default LovedItemProduct;