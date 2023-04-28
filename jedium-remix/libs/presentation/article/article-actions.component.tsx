import type{ ReactElement } from "react"
import type{ ArticleType } from "libs/domain/entity/article.schema"
import { Link } from "@remix-run/react"

type ActionsProps = {
    article: ArticleType,
    className: string
}

export default function Actions({
    article,
    className
}: ActionsProps): ReactElement {
    return <div className={className === 'not-actions' ? '' : "article-actions"}>
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
                <span className="date">
                    {new Date(article.updatedAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </span>
            </div>
            {
                article.author.following
                    ? <button className="btn btn-sm btn-secondary">
                        <i className="ion-minus-round"></i>
                        &nbsp; Following {article.author.username}{" "}
                        <span className="following"></span>
                    </button>
                    : <button className="btn btn-sm btn-outline-secondary">
                        <i className="ion-plus-round"></i>
                        &nbsp; Follow {article.author.username}{" "}
                        <span className="following"></span>
                    </button>
            }
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp; Favorite Post{" "}
                <span className="counter">({article.favoritesCount})</span>
            </button>
        </div>
    </div>
}