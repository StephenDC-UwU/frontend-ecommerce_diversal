import { GenderType } from "@/types/gender";
import { useEffect, useState } from "react";


export function useGetGender() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/genders?populate=*`;
    const [result, setResult] = useState<GenderType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setResult(json.data.filter((item) => item.gender_name !== 'Unisex'));
                setIsLoading(false);
            } catch (error: any) {
                setError(error);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        })()

    }, [url])

    return { isLoading, result, error }
}


