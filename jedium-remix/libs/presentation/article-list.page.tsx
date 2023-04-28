import type { ReactElement } from "react";
import ArticleListPreview from "./article-list-preview/article-list-preview.container";
import type { ArticleType } from "libs/domain/entity/article.schema";

type ArticleListProps = {
  articles: ArticleType[],
  articleCount: number,
}

export default function ArticleList({
  articles,
  articleCount,
}: ArticleListProps): ReactElement {
  return <ArticleListPreview articles={articles} articleCount={articleCount} />
}