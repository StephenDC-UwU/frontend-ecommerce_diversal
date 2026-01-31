import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent className="text-dark dark:text-white">
                <Link href="/shop/male" className="block">
                    Man
                </Link>
                <Link href="/shop/female" className="block">
                    Woman
                </Link>
                <Link href="/shop" className="block">
                    Shop
                </Link>
                <Link href="/shop" className="block">
                    Accesories
                </Link>
            </PopoverContent>
        </Popover>
    );
};

export default ItemsMenuMobile;
