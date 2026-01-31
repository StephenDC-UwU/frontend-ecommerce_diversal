import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

export function useGetProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate[0]=sub_category&populate[1]=brand&populate[2]=images`;
    const [result, setResult] = useState<ProductType[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log("All Products: ", json.data);
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
