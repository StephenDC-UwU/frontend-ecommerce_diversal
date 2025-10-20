import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

export function useGetFeaturedProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`;
    const [result, setResult] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
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