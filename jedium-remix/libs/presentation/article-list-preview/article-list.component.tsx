import type { ReactElement } from "react";
import type { ArticleType } from "libs/domain/entity/article.schema";
import { Link } from "@remix-run/react";
import Paginator from "./paginator.component";
import Card from "libs/shared/ui/card.component";

type ArticleListProps = {
  articles: ArticleType[],
  articleCount: number,
}

export default function ArticleList({
  articles,
  articleCount,
}: ArticleListProps): ReactElement {
  return (<>
    {articles.map((article, idx) => (<Card key={`${article.slug}${idx}`} className={`border-teal-500 hover:border-orange-500`}>
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
          <Card className={`border-neutral-200 hover:border-indigo-600`}>
            <span>Read more...</span>
            {article.tagList.length > 0 && (
              <ul className="tag-list">
                {article.tagList.map((tag) => (
                  <li className="tag-default tag-pill tag-outline" key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </Card>
        </Link>
      </div>
    </Card>
    ))}
    <Paginator articlesCount={articleCount} />
    container
  </>)
}