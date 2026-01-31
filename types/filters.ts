export type FilterTypes = {
    result: ResultFilterTypes | null;
    isLoading: boolean;
    error: string | null;
}

export type ResultFilterTypes = {
    schema: {
        attributes: {
            origin: {
                enum: string[]
            }
        }
    }
}