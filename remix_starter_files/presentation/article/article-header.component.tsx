import type { ArticleType } from "~/domain/entity/article.schema";
import type { ReactElement } from "react"
import Actions from "./article-actions.component"

type ArticleProps = {
  article: ArticleType
}

export default function Header({
  article
}: ArticleProps): ReactElement {
  return <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <Actions className={'not-actions'} article={article} />
        </div>
      </div>
}