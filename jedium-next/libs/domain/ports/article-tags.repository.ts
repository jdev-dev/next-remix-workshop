import { ArticleListResponseType } from "../entity/article.schema";
import { ResponseReturnType } from "../entity/return-type.schema";
import { TagsLIstType } from "../entity/tags.schema";

export interface ArticlesTagsRepositoryI {
    useGetAllArticles: () => ResponseReturnType<ArticleListResponseType>,
    useGetTags: () => ResponseReturnType<TagsLIstType>,
}