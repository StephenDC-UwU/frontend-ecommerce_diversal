import { ProductType } from "./product";

export type ResponseType= {
    result: ProductType[];
    isLoading: boolean;
    error: string | null;
}