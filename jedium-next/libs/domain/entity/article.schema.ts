export interface ArticleListResponseType {
    articles: SingleArticleType[],
    articlesCount: number
};

export interface SingleArticleResponseType {
    article: SingleArticleType;
}

export interface SingleArticleType {
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

export interface AuthorType {
    username: string;
    bio: string;
    image: string;
    following: boolean;
};
