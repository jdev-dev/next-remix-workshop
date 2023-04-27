import useSWR from "swr"
import { ArticleListResponseType } from "../domain/entity/article.schema";
import { ResponseReturnType } from "../domain/entity/return-type.schema";
import { TagsLIstType } from "../domain/entity/tags.schema";
import { ArticlesTagsRepositoryI } from "../domain/ports/article-tags.repository";
import { ENDPOINTS, fetcher, SERVER_BASE_URL } from "../shared/utils/endpoints";

const ArticleTagsApi: ArticlesTagsRepositoryI = {

    useGetAllArticles: () =>  {

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
            fetcher<TagsLIstType>
            );

            return {
               response,
               isError,
               isLoading,
            } as ResponseReturnType<TagsLIstType>;

    }

}

export default ArticleTagsApi;