import type { ArticleType } from "libs/domain/entity/article.schema";
import type { CommentType} from "~/domain/entity/comments.schema";
import Article from "./article/article.container";
import Comments from "./commments/comments.container";

type SingleArticlePageProps = {
    article: ArticleType;
    comments: CommentType[];
}
export default function SingleArticlePage({
    article,
    comments,
}: SingleArticlePageProps) {
    return (
        <div className="article-page">
            <Article article={article} />
            <div className="row">
                <div className="col-xs-12 col-md-8 offset-md-2">
                    <Comments comments={comments} />
                </div>
            </div>
        </div>
    );
}