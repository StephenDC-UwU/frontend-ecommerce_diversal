

export type ResponseType<T>= {
    result: T[] | null | undefined;
    isLoading: boolean | null;
    error: string | null;
}