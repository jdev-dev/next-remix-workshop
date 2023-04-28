import LoadingSpinner from "@/libs/shared/common/loading-spinner.component";
import { AxiosError } from "axios";
import { NextPage } from "next";

type LoadingOrErrorPropsType = {
    isError: AxiosError,
    isLoading: boolean,
    customMessage: string,
}

const LoadingOrError: NextPage<LoadingOrErrorPropsType> = ({ isError, isLoading, customMessage }) => {
    if (isError) {
        return (
            <div className="col-md-9">
                <div className="feed-toggle">
                    {customMessage}
                    {isError.status}
                </div>
            </div>
        );
    }

    if (isLoading) return <LoadingSpinner />;

    return <></>;
}

export default LoadingOrError;