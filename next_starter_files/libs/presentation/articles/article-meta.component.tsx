import type { SingleArticleType } from "../../domain/entity/article.schema"
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

type ArticleMetaProps = {
    article: SingleArticleType,
}

const ArticleMeta : NextPage<ArticleMetaProps>  = ({ article }) => {
  if (!article) return <></>;

  return (
    <div className="article-meta">
      <Link
        href="/profile/[pid]"
        as={`/profile/${encodeURIComponent(article.author?.username)}`}
      >
        <img src={article.author?.image} alt="author-profile-image" />
      </Link>

      <div className="info">
        <Link
          href="/profile/[pid]"
          as={`/profile/${encodeURIComponent(article.author?.username)}`}
          className="author"
        >
          {article.author?.username}
        </Link>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>

    </div>
  );
};

export default ArticleMeta;
