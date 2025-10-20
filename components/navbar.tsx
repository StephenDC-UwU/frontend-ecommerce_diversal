"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToogleTheme from "./toggle-theme";


const navbar = () => {

    const router = useRouter();

    return (
        <nav className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:_max-w-4xl md:max-w-6xl">
            <h1
                className="text-3xl"
                onClick={() => router.push('/')}
            >
                Shopping
                <span className="font-bold">Diversal</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>


            <div className="flex items-center justify-between gap-7">
                <ShoppingCart
                    strokeWidth={1}
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => router.push("/cart")}
                />
                <Heart
                    strokeWidth={1}
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => router.push("/love-products")}
                />
                <User
                    strokeWidth={1}
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => router.push("/user-account")}
                />
                <ToogleTheme />
            </div>
        </nav>
    )
}

export default navbar;