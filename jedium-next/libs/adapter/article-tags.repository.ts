import  useSWR from "swr";
import { ResponseReturnType } from "../domain/entity/return-type.schemas";
import { ArticleListResponseType } from "../domain/entity/article.schema";
import { ArticlesTagsRepositoryI } from "../domain/ports/article-tags.repository";
import { ENDPOINTS, fetcher, SERVER_BASE_URL } from "../shared/utils/endpoints";
import { TagsListType } from "../domain/entity/tags.schemas";

const ArticleTagsApi: ArticlesTagsRepositoryI = {
    useGetAllArticles: () => {
        const {data: response, error: isError, isLoading} = 
        useSWR(
            `${SERVER_BASE_URL}${ENDPOINTS.ARTICLES}`, 
            fetcher
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
            fetcher
            );

        return {
            response,
            isError,
            isLoading
        } as ResponseReturnType<TagsListType>
    }
}

export default ArticleTagsApi;