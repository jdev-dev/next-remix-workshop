import useSWR from "swr";
import { ArticlesTagRepositoryI } from "../domain/ports/article-tags.repository";
import { ENDPOINTS, SERVER_BASE_URL, fetcher } from "../shared/utils/endpoints";
import { ResponseReturnType } from "../domain/entity/return-type.schema";
import { ArticleListResponseType } from "../domain/entity/article.schema";
import { TagsListType } from "../domain/entity/tags.schema";

const ArticleTagsApi: ArticlesTagRepositoryI = {
    useGetAllArticles: () => {
        const {data: response, error: isError, isLoading} = 
            useSWR(
                `${SERVER_BASE_URL}${ENDPOINTS.ARTICLES}`,
                fetcher<ArticleListResponseType>
            );

        return {
            response,
            isError,
            isLoading,
        } as ResponseReturnType<ArticleListResponseType>;
    },

    useGetTags: () => {
        const {data: response, error: isError, isLoading} = 
            useSWR(
                `${SERVER_BASE_URL}${ENDPOINTS.TAGS}`,
                fetcher<TagsListType>
            );

        return {
            response,
            isError,
            isLoading,
        } as ResponseReturnType<TagsListType>;
    }
}

export default ArticleTagsApi;