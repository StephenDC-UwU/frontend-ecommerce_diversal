"use client"
import Link from "next/link";
import { useGetCategory } from "@/api/useGetCategory";
import { ResponseType } from "@/types/response";
import Image from "next/image";
import { CategoryType } from "@/types/category";

const ChooseCategory = () => {
    const { result, isLoading }: ResponseType<CategoryType> = useGetCategory();
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Select your Favorite Category</h3>
            <div className="grid gap-6 sm:grid-cols-3">
                {!isLoading && result != undefined && (
                    result.map((category) => (
                        <Link key={category.id} href={`/category/${category.slug}`}
                            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg w-[400px] h-[500px]"
                        >
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.image.url}`}
                                layout="fill"
                                objectFit="cover"
                                priority={false}
                                alt="img_category"
                            />
                            <p className="absolute w-full py-2 text-2xl font-bold text-center text-white bottom-5 ">{category.category_name}</p>

                        </Link>
                    ))
                )}

            </div>
        </div>
    );
}

export default ChooseCategory;