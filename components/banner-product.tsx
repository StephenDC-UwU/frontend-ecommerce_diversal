import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>You can find All you need</p>
                <h4 className="mt-2 text-5xl font-extrabold uppercase">Diversal</h4>
                <p className="my-2 text-lg">Each moment must to be unique</p>
                <Link href="#" className={buttonVariants()}>Buy</Link>
            </div>
            <div className="h-[350px] md:h-[900px] bg-[url('/banner-products.jpg')] bg-center mt-5 bg-cover" />
        </>
    );
}

export default BannerProduct;