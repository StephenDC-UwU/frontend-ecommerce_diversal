"use client";
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import SkeletonSchema from "./skeleton-schema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

const FeaturedProducts = () => {
    const { result, error, isLoading }: ResponseType = useGetFeaturedProducts();

    console.log(result);

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Featured Products</h3>
            <Carousel>
                <CarouselContent className="ml-2 md:-ml-4">
                    {isLoading && <SkeletonSchema grid={3} />}
                    {result.map((product: ProductType) => {
                        const { id, images } = product

                        return (
                            <CarouselItem
                                className="md:basis-1/2 lg:basis-1/3 group"
                                key={id}
                            >
                                <div className="p-1">
                                    <Card className="py-4 border border-gray-200 shadow-none">
                                        <CardContent className="relative flex items-center justify-center px-6 py-2">
                                            <Image
                                                width={200}
                                                height={500}
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[1].url}`} alt="Image featured" />
                                            <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100">
                                                <div className="flex justify-center gap-x-6">
                                                    <Expand />
                                                    <ShoppingCart />
                                                </div>
                                            </div>

                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )

                    })}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;
