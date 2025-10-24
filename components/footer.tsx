import Link from "next/link";
import { Separator } from "@/components/ui/separator"

const dataFooter = [
    {
        id: 1,
        title: "About",
        link: "/about",
    },
    {
        id: 2,
        title: "Store",
        link: "/store",
    },
    {
        id: 3,
        title: "Accesories",
        link: "/accesories",
    },
    {
        id: 4,
        title: "Contact",
        link: "/contact",
    }
]

const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>
                        Shoppging
                        <span className="font-bold">
                            Diversal
                        </span>
                    </p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map((dataFooter) => (
                            <li key={dataFooter.id}>
                                <Link href={dataFooter.link} className="mr-4 hover:underline md:mr-6 ">
                                    {dataFooter.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:boder-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024
                    <span className="font-bold">
                        <Link href="/" className="ml-1 hover:underline">
                            {" "}Shopping Diversal{" "}
                        </Link>
                    </span>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;