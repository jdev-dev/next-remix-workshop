import ArticleList from "./article-list.component";
import EmptyList from "./empy-list.component";
import type { ReactElement } from "react";
import type { ArticleType } from "libs/domain/entity/article.schema";

type ArticleListPreviewProps = {
    articles: ArticleType[],
    articleCount: number,
}
export default function ArticleListPreview({
    articles,
    articleCount,
}: ArticleListPreviewProps) : ReactElement {
    return articles.length > 0 
        ? <ArticleList articles={articles} articleCount={articleCount} /> 
        : <EmptyList />
}