import React from "react";
import ArticlePreview from "./article-preview.component";
import { SingleArticleType } from "../../domain/entity/article.schema";
import { NextPage } from "next";

type ArticleListProps = {
    articles: SingleArticleType[]
}

const ArticleList: NextPage<ArticleListProps> = ({ articles }) => {

    if (articles && articles.length === 0) {
        return <div className="article-preview">No articles are here... yet.</div>;
    }

    return (
        <>
            {articles?.map((article) => (
                <ArticlePreview key={article.slug} article={article} />
            ))}
        </>
    );
};

export default ArticleList;