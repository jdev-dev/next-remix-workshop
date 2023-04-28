import type { ReactElement } from "react";
import type { ArticleType } from "~/domain/entity/article.schema";
import { Link } from "@remix-run/react";
import Paginator from "./paginator.component";

type ArticleListProps = {
  articles: ArticleType[],
  articleCount: number,
}

export default function ArticleList({
  articles,
  articleCount,
}: ArticleListProps): ReactElement {
  return (<>
    {articles.map((article) => (
      <div className="article-preview" key={article.slug}>
        <div className="article-meta">
          <Link to={`/author/${article.author.username}`}>
            <img src={article.author.image} alt="" />
          </Link>
          <div className="info">
            <Link
              to={`/author/${article.author.username}`}
              className="author"
            >
              {article.author.username}
            </Link>
            <span className="date">{article.updatedAt}</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart"></i> {article.favoritesCount}
          </button>
        </div>
        <Link to={`/articles/${article.slug}`} className="preview-link">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <span>Read more...</span>
          {article.tagList.length > 0 && (
            <ul className="tag-list">
              {article.tagList.map((tag) => (
                  <li className="tag-default tag-pill tag-outline" key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </Link>
      </div>
    ))}
    <Paginator articlesCount={articleCount} />
    container
  </>)
}