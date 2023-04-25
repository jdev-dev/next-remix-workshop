import { ResponseReturnType } from "../entity/return-type.schemas";
import { ArticleListResponseType} from "../entity/article.schema";
import { TagsListType } from "../entity/tags.schemas";

export interface ArticlesTagsRepositoryI {
    useGetAllArticles: () => ResponseReturnType<ArticleListResponseType>,
    useGetTags: () => ResponseReturnType<TagsListType>,
}