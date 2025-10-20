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
            <PopoverContent className="text-black">
                <Link href="/" className="block">
                    Clothes
                </Link>
                <Link href="/category/clothes" className="block">
                    Shoes
                </Link>
                <Link href="/category/clothes" className="block">
                    Accesories
                </Link>
                <Link href="/category/clothes" className="block">
                    Jowerly
                </Link>
            </PopoverContent>
        </Popover>
    );
};

export default ItemsMenuMobile;
