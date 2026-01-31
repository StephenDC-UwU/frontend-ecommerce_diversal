import { CategoryType } from "@/types/category";
import { useEffect, useState } from "react";

export function useGetCategory() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
    const [result, setResult] = useState<CategoryType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setResult(json.data);
                setIsLoading(false);
            } catch (error: unknown) {
                const errorMessage = error instanceof Error ? error.message : "Unknown error";
                setError(errorMessage);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        })()

    }, [url])

    return { isLoading, result, error }
}