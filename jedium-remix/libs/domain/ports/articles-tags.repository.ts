import type {  ArticleListType } from "libs/domain/entity/article.schema";
import type { TagsType } from "../entity/tag.schema";

export interface ArticlesTagRepositoryI {
    getAllArticles: (params: string) => Promise<ArticleListType>;
    getTags: () => Promise<TagsType>;
}
