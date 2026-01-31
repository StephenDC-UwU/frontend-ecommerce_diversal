"use client";
import { useEffect } from "react";
import { BaggageClaim, Heart, ShoppingCart, User as UserIcon, LogOut, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToogleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { User } from "@/types/user";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutAction } from "@/actions/auth";
import { toast } from "sonner";

interface NavbarProps {
    user: User | null;
}

const Navbar = ({ user }: NavbarProps) => {

    const router = useRouter();
    const { items, setUserId, userId: cartUserId } = useCart();

    const { lovedItems } = useLovedProducts();

    useEffect(() => {
        // Sync user ID with cart store
        if (user && user.id !== cartUserId) {
            setUserId(user.id);
        } else if (!user && cartUserId !== null) {
            setUserId(null);
        }
    }, [user, cartUserId, setUserId]);

    const handleLogout = async () => {
        await logoutAction();
        toast.info("Logged out successfully");
        router.refresh();
    }

    return (
        <nav className="relative md:absolute z-50 top-0 left-0 right-0 flex items-center justify-between py-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl ">
            <h1
                className="text-4xl hidden md:flex"
                onClick={() => router.push('/')}
            >
                Shopping
                <span className="font-bold">Diversal</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex ">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>


            <div className="flex items-center justify-between gap-3">
                {items.length === 0 ?
                    <ShoppingCart
                        strokeWidth={1}
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => router.push("/cart")}
                    />
                    : (
                        <div className="flex gap-1" onClick={() => router.push("/cart")}>
                            <BaggageClaim strokeWidth={1} className="cursor-pointer" onClick={() => router.push("/cart")} />
                            <span>{items.length}</span>
                        </div>
                    )}

                <Heart
                    strokeWidth={1}
                    className={`cursor-pointer ${lovedItems.length > 0 && 'fill-primary'}`}
                    onClick={() => router.push("/loved-products")}
                />

                {user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <UserIcon strokeWidth={1} className="w-6 h-6 cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router.push("/user-account")}>
                                <UserRound className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <UserIcon
                        strokeWidth={1}
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => router.push("/login")}
                    />
                )}

                <ToogleTheme />
            </div>
        </nav>
    )
}

export default Navbar;