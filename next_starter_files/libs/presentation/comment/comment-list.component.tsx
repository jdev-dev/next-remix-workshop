import React from "react";

import type { CommentType } from "../../domain/entity/comments.schema";
import Comment from "./comment.component";
import CommentInput from "./commentI-input.component";
import { NextPage } from "next";

type CommentListPropsType = {
  comments: CommentType[]
}

const CommentList: NextPage<CommentListPropsType> = ({ comments }) => {
  return (
    <div>
      <CommentInput />
      {comments.map((comment: CommentType) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
