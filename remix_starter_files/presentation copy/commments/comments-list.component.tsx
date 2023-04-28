import type { CommentType} from "~/domain/entity/comments.schema";

type CommentsListProps = {
  comments: CommentType[];
}

export default function CommentsList({ comments, }: CommentsListProps) {

  return (
    <>
      {comments.map((comment) => (
        <div className="card" key={comment.id}>
          <div className="card-block">
            <p className="card-text">{comment.body}</p>
          </div>
          <div className="card-footer">
            <a
              href={`/author/${comment.author.username}`}
              className="comment-author"
            >
              <img
                src={comment.author.image}
                className="comment-author-img"
                alt={comment.author.username}
              />
            </a>
            &nbsp;
            <a href="/" className="comment-author">
              {comment.author.username}
            </a>
            <span className="date-posted">
              {new Date(comment.updatedAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}