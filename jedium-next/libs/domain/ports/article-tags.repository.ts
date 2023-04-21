import { ArticleListResponseType } from "../entity/article.schema";
import { ResponseReturnType } from "../entity/return-type.schema";
import { TagsListType } from "../entity/tags.schema";

export interface ArticlesTagRepositoryI {
    useGetAllArticles: () => ResponseReturnType<ArticleListResponseType>,
    useGetTags: () => ResponseReturnType<TagsListType>,
}
