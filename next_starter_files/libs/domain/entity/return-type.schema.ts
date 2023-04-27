import { AxiosError } from "axios";

export type ResponseReturnType<T> = {
    response: T;
    isError: AxiosError;
    isLoading: boolean;
}