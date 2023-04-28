import { ReactElement } from "react";

export default function Form() : ReactElement {
    return <>
        <p>
            <a href="/login">Sign in</a> or <a href="/register">sign up</a> to
            add comments on this article.
        </p>
        {/* Post comment form */}
        <form className="card comment-form">
            <div className="card-block">
                <textarea
                    className="form-control"
                    placeholder="Write a comment..."
                    rows={3}
                ></textarea>
            </div>
            <div className="card-footer">
                <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                    alt=""
                />
                <button className="btn btn-sm btn-primary">Post Comment</button>
            </div>
        </form>
    </>
}