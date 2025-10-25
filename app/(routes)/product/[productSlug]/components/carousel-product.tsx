/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselProductProps {
    images: Array<{
        id: number;
        url: string;
    }>
};



const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props;
    return (
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.id}>
                            <img src={`${image.url}`} alt="Image Product" className="rounded-lg" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
            </Carousel>
        </div>
    );
}

export default CarouselProduct;