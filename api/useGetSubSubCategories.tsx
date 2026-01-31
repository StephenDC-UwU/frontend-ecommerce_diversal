import { SubSubCategoryType } from "@/types/subSubCategory";
import { useEffect, useState } from "react";

export function useGetSubSubCategories() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sub-sub-categories`;
    const [result, setResult] = useState<SubSubCategoryType[]>([]);
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
            }
        })()

    }, [url])

    return { isLoading, result, error }
}