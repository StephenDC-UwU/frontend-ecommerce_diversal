"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Car } from "lucide-react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop = [
    {
        id: 1,
        title: "Free shipping on orders over $50!",
        description: "Shop now and enjoy fast, free delivery on all orders above $50.",
        link: "/shop",
    },
    {
        id: 2,
        title: "Deal of the week: 30% off selected items!",
        description: "Shop now and enjoy fast, free delivery on all orders above $50.",
        link: "/shop",
    },
    {
        id: 3,
        title: "Returning customer? Get 10% off your next order!",
        description: "Shop now and enjoy fast, free delivery on all orders above $50.",
        link: "/shop",
    },
    {
        id: 4,
        title: "Summer Sale: Up to 50% off on summer essentials!",
        description: "Shop now and enjoy fast, free delivery on all orders above $50.",
        link: "/shop",
    }

]

const CarouselTextBanner = () => {
    const router = useRouter();
    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel

                className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2500,
                    })
                ]}
            >
                <CarouselContent>
                    {dataCarouselTop.map(({ id, title, description, link }) => (


                        <CarouselItem
                            className="p-3 text-center cursor-pointer"
                            onClick={() => router.push(link)}
                            key={id}>
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">
                                            {title}
                                        </p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                                            {description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}

                </CarouselContent>


            </Carousel>
        </div>
    )
};

export default CarouselTextBanner;