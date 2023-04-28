import type { ArticleListType } from "libs/presentation/domain/entity/article.schema";
import type { TagsType } from "../entity/tag.schema";

export interface ArticleTagsI {
    getAllArticles: () => Promise<ArticleListType>;
    getTags: () => Promise<TagsType>
}
