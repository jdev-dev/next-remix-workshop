import type { ArticleListType, ArticleResponseType, ArticleBulletPointsType } from "libs/domain/entity/article.schema";
import type { TagsType } from "../entity/tag.schema";
import type { CommentsResponseType } from "../entity/comments.schema";

export interface ArticlesTagRepositoryI {
    getAllArticles: (params: string) => Promise<ArticleListType>;
    getTags: () => Promise<TagsType>;
    getTaggedArticles: (tag: string) => Promise<ArticleListType>;
    getSingleArticle: (slug: string) => Promise<ArticleResponseType>;
    getArticleComments: (slug: string) => Promise<CommentsResponseType>;
    getArticleBulletPoints: (slug: string) => Promise<ArticleBulletPointsType>;
}