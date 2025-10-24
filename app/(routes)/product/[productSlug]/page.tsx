"use client"
import { useGetProductBySlug } from "@/api/useGetProductBySlug";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

export default function Page() {
    const params = useParams();
    const productSlug = params.productSlug as string;

    const { result }: ResponseType<ProductType> = useGetProductBySlug(productSlug);

    if (result === null) {
        return <SkeletonProduct />
    }

    const productsArray = result as ProductType[];

    if (productsArray.length === 0) {
        return <div>Sorry We dont have this product.</div>;
    }

    const product: ProductType = productsArray[0];

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct images={product.images} />
                </div>
                <div className="sm:px-12">
                    <InfoProduct product={product} />
                </div>
            </div>
        </div>
    )
}