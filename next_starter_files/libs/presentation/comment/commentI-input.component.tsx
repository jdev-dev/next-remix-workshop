import React from "react";

const CommentInput = () => {

  return (
    <form className="card comment-form" >
      <div className="card-block">
        <textarea
          rows={3}
          className="form-control"
          placeholder="Write a comment..."
        />
      </div>
      <div className="card-footer">
        <img
          className="comment-author-img"
          src={''}
          alt="Comment author's profile image"
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
