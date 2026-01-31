"use client"
import Link from "next/link";
import { ResponseType } from "@/types/response";
import Image from "next/image";
import { GenderType } from "@/types/gender";
import { useGetGender } from "@/api/useGetGender";

const ChooseGender = () => {
    const { result, isLoading }: ResponseType<GenderType> = useGetGender();

    console.log("Choose Category:", result)

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl text-center sm:pb-8">Select your Favorite Category</h3>
            <div className="grid gap-1 sm:grid-cols-2">
                {!isLoading && result != undefined && (
                    result.map((category) => (

                        <Link key={category.id} href={`/shop/${category.slug}`}
                            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg w-[400px] h-[500px]"
                        >
                            <Image
                                src={`${category.image.url}`}
                                layout="fill"
                                objectFit="cover"
                                priority={false}
                                alt="img_category"
                            />
                            <p className="absolute w-full py-2 text-2xl font-bold text-center text-white bottom-5 ">{category.gender_name}</p>

                        </Link>
                    ))
                )}

            </div>
        </div>
    );
}

export default ChooseGender;