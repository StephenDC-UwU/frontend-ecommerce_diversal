"use client";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeleton-schema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";


const FeaturedProducts = () => {
    const { result, isLoading }: ResponseType<ProductType> = useGetFeaturedProducts();
    const router = useRouter();
    const { addItem } = useCart();

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Featured Products</h3>
            <Carousel>
                <CarouselContent className="gap-4">
                    {isLoading && <SkeletonSchema grid={3} />}
                    {result.map((product: ProductType) => {
                        const { id, images, slug, product_name, brand } = product

                        return (
                            <CarouselItem
                                className="md:basis-1/2 lg:basis-1/3 group"
                                key={id}
                            >
                                <div className="p-1">
                                    <Card className="py-4 border border-gray-200 shadow-none h-auto">
                                        <CardContent className="relative flex items-center justify-center px-6 py-2 h-80 overflow-hidden">
                                            <Image
                                                layout="fill"
                                                objectFit="cover"
                                                priority={false}
                                                src={`${images[1].url}`} alt="Image featured"
                                            />
                                            <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100">
                                                <div className="flex justify-center gap-x-6">
                                                    <IconButton
                                                        onclick={() => router.push(`product/${slug}`)}
                                                        icon={<Expand size={20} />}
                                                        className="text-gray-600"
                                                    />
                                                    <IconButton
                                                        onclick={() => addItem(product)}
                                                        icon={<ShoppingCart size={20} />}
                                                        className="text-gray-600"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <div className="flex justify-between gap-4 px-8">
                                            <h3 className="text-lg font-bold">{product_name}</h3>
                                            <div className="flex items-center justify-between">
                                                <p className="px-2 py-1 text-black dark:bg-white dark:text-black ">{brand.brand_name}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;
