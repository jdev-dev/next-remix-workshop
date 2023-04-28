import type { ArticleType } from "~/domain/entity/article.schema";
import Actions from "./article-actions.component";
import Header from "./article-header.component";
import Body from "./article-body.components";

type ArticleProps = {
    article: ArticleType;
}

export default function Article({
    article,
}: ArticleProps) {
    return <>
    <Header article={article}/>
    <Body article={article} />
    <Actions article={article} className="actions" />
    </>
}