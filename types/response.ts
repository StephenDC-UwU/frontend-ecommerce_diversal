

export type ResponseType<T>= {
    result: T[];
    isLoading: boolean;
    error: string | null;
}