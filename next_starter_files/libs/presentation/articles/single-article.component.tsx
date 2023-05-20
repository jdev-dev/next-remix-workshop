import { NextPage } from "next";

import type { SingleArticleType } from '../../domain/entity/article.schema';
import ArticleMeta from "./article-meta.component";
import { CommentsResponseType } from "@/libs/domain/entity/comments.schema";
import CommentList from "../comment/comment-list.component";
import { Suspense } from "react";
import ArticleBulletPoints from "./article-bullet-points.component";

type SingleArticleComponentPropsType = {
    article: SingleArticleType,
    bulletPoints: { slug: string, bulletPoints: string },
    comments: CommentsResponseType
}
const SingleArticleComponent: NextPage<SingleArticleComponentPropsType> = ({ article, bulletPoints, comments }) => {

    return (
        <div className="article-page">
            <div className="banner">
                <div className="container">
                    <h1>{article.title}</h1>
                    <ArticleMeta article={article} />
                </div>
            </div>
            <div className="container page">
                <div className="row article-content">
                    <div className="col-xs-12">
                        <Suspense>
                            <ArticleBulletPoints bulletPoints={bulletPoints} />
                        </Suspense>
                        <div dangerouslySetInnerHTML={article.markup} />
                        <ul className="tag-list">
                            {article.tagList.map((tag) => (
                                <li key={tag} className="tag-default tag-pill tag-outline">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="article-actions" />
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-8 offset-md-2">
                    <CommentList comments={comments.comments} />
                </div>
            </div>
        </div>
    )
}

export default SingleArticleComponent;
