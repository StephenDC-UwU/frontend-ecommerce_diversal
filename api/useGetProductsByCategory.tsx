import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

export function useGetProductsByCategory(slugCategory: string | string[] | undefined) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[sub_sub_category][sub_category][categories][slug][$eq]=${slugCategory}&populate[0]=sub_sub_category.sub_category.categories&populate[1]=brand&populate[2]=images`;
    const [result, setResult] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log("From Server: ", json.data);
                setResult(json.data);
                setIsLoading(false);
            } catch (error: any) {
                setError(error);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [url]);

    return { result, isLoading, error };
}