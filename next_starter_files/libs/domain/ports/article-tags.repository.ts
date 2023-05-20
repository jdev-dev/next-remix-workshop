import type { SingleArticleResponseType, ArticleListResponseType } from '../entity/article.schema';
import type { TagsListType } from "../entity/tag.schema";
import type { CommentsResponseType } from "../entity/comments.schema";
import type { ResponseReturnType } from '../entity/response-return-type.schema';

export interface ArticlesTagRepositoryI {
    useGetAllArticles: (page: number, limit: number) => ResponseReturnType<ArticleListResponseType>;
    useGetTags: () => ResponseReturnType<TagsListType>;
    useGetTaggedArticles: (tag: string) => ResponseReturnType<ArticleListResponseType>;
    useGetSingleArticle: (slug: string) => ResponseReturnType<SingleArticleResponseType>;
    useGetArticleComments: (slug: string) => ResponseReturnType<CommentsResponseType>;
    // getArticleBulletPoints: (slug: string) => Promise<ArticleBulletPointsType>;
}
