import { NextPage } from "next";
import Link from "next/link";
import React from "react";

import type { SingleArticleType } from '../../domain/entity/article.schema'

const FAVORITED_CLASS = "btn btn-sm btn-primary";
const NOT_FAVORITED_CLASS = "btn btn-sm btn-outline-primary";

type ArticlePreviewProps = {
    article: SingleArticleType,
}

const ArticlePreview : NextPage<ArticlePreviewProps> = ({ article }) => {

    const [hover, setHover] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(-1);
    
    if (!article) return <></>;

    return (
        <div className="article-preview" style={{ padding: "1.5rem 0.5rem" }}>
            <div className="article-meta">
                <Link
                    href="/profile/[pid]"
                    as={`/profile/${article.author.username}`}
                >
                    <img
                        src={article.author.image}
                        alt="author's profile image"
                        width={144}
                        height={144}
                    />
                </Link>

                <div className="info">
                    <Link
                        href="/profile/[pid]"
                        as={`/profile/${article.author.username}`}
                        className="author"
                    >
                        <span>{article.author.username}</span>
                    </Link>
                    <span className="date">
                        {new Date(article.createdAt).toDateString()}
                    </span>
                </div>

                <div className="pull-xs-right">
                    <button
                        className={
                            article.favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS
                        }
                    >
                        <i className="ion-heart" /> {article.favoritesCount}
                    </button>
                </div>
            </div>

            <Link
                href="/articles/[pid]"
                as={`/articles/${article.slug}`}
                className="preview-link"
            >
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <span>Read more...</span>
                <ul className="tag-list" style={{ maxWidth: "100%" }}>
                    {article.tagList.map((tag: string, idx: number) => {
                        return (
                            <Link href={`/?tag=${tag}`} as={`/?tag=${tag}`} key={idx}>
                                <li
                                    className="tag-default tag-pill tag-outline"
                                    onClick={(e) => e.stopPropagation()}
                                    onMouseOver={() => {
                                        setHover(true);
                                        setCurrentIndex(idx);
                                    }}
                                    onMouseLeave={() => {
                                        setHover(false);
                                        setCurrentIndex(-1);
                                    }}
                                    style={{
                                        borderColor:
                                            hover && currentIndex === idx ? "#5cb85c" : "initial",
                                    }}
                                >
                                    <span
                                        style={{
                                            color:
                                                hover && currentIndex === idx ? "#5cb85c" : "inherit",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </Link>
        </div>
    );
};

export default ArticlePreview;
