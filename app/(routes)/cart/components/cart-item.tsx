/* eslint-disable @next/next/no-img-element */
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";


interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { product } = props;
    const router = useRouter();
    const { removeItem } = useCart();
    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product${product.slug}`)}>
                <img src={`${product.images[0].url}`} alt="product"
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.product_name}</h2>
                    <p className="font-bold">{formatPrice(product.price)}</p>
                    <div className="flex items-center justify-between gap-3.5">
                        <p className="px-2 py-1 bg-primary rounded-full text-secondary w-fit">{product.brand.brand_name}</p>
                    </div>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white dark:text-black border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;