import type { CommentType } from "@/libs/domain/entity/comments.schema";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

type CommentPropsType = {
  comment: CommentType
}

const Comment: NextPage<CommentPropsType> = ({ comment }) => {

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link
          href="profile/[pid]"
          as={`/profile/${comment.author.username}`}
          className="comment-author"
        >
          <img
            src={comment.author.image}
            alt="Comment author's profile image"
            className="comment-author-img"
          />
        </Link>
        &nbsp;
        <Link
          href="profile/[pid]"
          as={`/profile/${comment.author.username}`}
          className="comment-author"
        >
          {comment.author.username}
        </Link>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default Comment;
