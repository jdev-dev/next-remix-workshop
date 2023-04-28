export type ArticleListResponseType = {
    articles: SingleArticleType[],
    articlesCount: number
};

export type SingleArticleResponseType = {
    article: SingleArticleType;
}

export type SingleArticleType = {
    tagList: string[];
    createdAt: string;
    author: AuthorType;
    description: string;
    title: string;
    body: string;
    slug: string;
    updatedAt: string;
    favoritesCount: number;
    favorited: boolean;
};

export type AuthorType = {
    username: string;
    bio: string;
    image: string;
    following: boolean;
};
