import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

const components: {
    id: number;
    title: string;
    href: string;
    description: string;
}[] = [
        {
            id: 5,
            title: "Man",
            description: "The best Arrival for Men",
            href: "/shop/male",
        },
        {
            id: 6,
            title: "Woman",
            description: "The beauty for Women",
            href: "/shop/female",
        },
    ];

const subComponentsClothes: {
    id: number;
    title: string;
    href: string;
    description: string;
}[] = [
        {
            "id": 3,
            "title": "Shirt",
            "description": "null",
            "href": "/shop/shirt",
        },
        {
            "id": 4,
            "title": "T-Shirt",
            "description": "null",
            "href": "/shop/t-shirt",
        },
        {
            "id": 6,

            "title": "Pants",
            "description": "null",
            "href": "/shop/pants",
        },
        {
            "id": 8,

            "title": "Jogger",
            "description": "null",
            "href": "/shop/jogger",
        },
        {
            "id": 10,

            "title": "Sneakers",
            "description": "null",
            "href": "/shop/sneakers",
        },
        {
            "id": 12,
            "title": "Sandals",
            "description": "null",
            "href": "/shop/sandals",
        },

    ];

const subComponentsAccesories: {
    id: number;
    title: string;
    href: string;
    description: string;
}[] = [
        {
            id: 6,
            title: "Bags",
            description:
                "Accessories designed to carry personal items, including backpacks, tote bags, crossbody bags, and handbags. Bags come in various sizes, materials, and styles, suitable for everyday use, travel, or special occasions.",
            href: "/shop/bags",
        },
        {
            id: 8,
            title: "Jewelry",
            description:
                "Decorative accessories worn for personal adornment, including necklaces, bracelets, rings, and earrings. Jewelry comes in various materials and designs, enhancing style for everyday or special occasions.",
            href: "/shop/jewelry",
        },
    ];




const MenuList = () => {
    return (
        <NavigationMenu >
            <NavigationMenuList className="flex-wrap">
                {/* Home */}
                <NavigationMenuItem >
                    <NavigationMenuTrigger className="bg-transparent">Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                        href="/shop"
                                    >
                                        <div className="mb-2 text-lg font-medium sm:mt-4">
                                            Featured
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            Explore our handpicked selection of featured products.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/shop" title="New Season Arrivals">
                                The latest and greatest products just for you.
                            </ListItem>
                            <ListItem href="/shop" title="Offerts and Discounts">
                                {`Exclusive deals you won't want to miss.`}
                            </ListItem>
                            <ListItem href="/shop" title="For you">
                                Handpicked selections tailored to your tastes.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Store */}
                <NavigationMenuItem >
                    <NavigationMenuTrigger className="bg-transparent">Store</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <li key={component.id} className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            href={component.href}
                                        >
                                            <div className="text-sm font-medium leading-none">{component.title}</div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                {component.description}
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>

                                    {/* Sub-items rendered outside the parent Link */}
                                    <ul className="mt-2 space-y-1 px-3">
                                        {subComponentsClothes.map((subComponentClothes) => (
                                            <ListItem
                                                key={subComponentClothes.id}
                                                title={subComponentClothes.title}
                                                href={subComponentClothes.href}
                                            >
                                            </ListItem>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                            <ListItem href="/category/accessories" title="Accessories">
                                {subComponentsAccesories.map((subComponentsAccesories) => (
                                    <ListItem
                                        key={subComponentsAccesories.id}
                                        title={subComponentsAccesories.title}
                                        href={subComponentsAccesories.href}
                                    >
                                        {subComponentsAccesories.description}
                                    </ListItem>
                                ))}
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>



                {/* About us */}
                <NavigationMenuItem >
                    <NavigationMenuLink asChild className="bg-transparent">
                        <Link href="/about">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>


                {/* Contact */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className="bg-transparent">
                        <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <div className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}

export default MenuList;
