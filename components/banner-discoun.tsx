"use client"
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">Get until a -25% Discount</h2>
            <h3> -20% by Spend 1000$ o -25% by spend 150$. Use this code <span>IAMDIVERSE</span></h3>
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()}>Buy</Link>
                <Link href="#" className={buttonVariants({ variant: "outline" })}>More information</Link>

            </div>
        </div>
    );
}

export default BannerDiscount;