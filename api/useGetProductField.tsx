import { ResultFilterTypes } from "@/types/filters";
import { useEffect, useState } from "react";

export function useGetProductField() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;
    const [result, setResult] = useState<ResultFilterTypes | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    return { result, isLoading, error };
}