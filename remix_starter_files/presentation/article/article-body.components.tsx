import type { ReactElement } from "react";
import type { ArticleType } from "~/domain/entity/article.schema";
import { Suspense } from "react";
import { Link, Outlet } from "@remix-run/react";

type BodyProps = {
  article: ArticleType;
};

export default function Body({ article }: BodyProps): ReactElement {
  return (
    <>
      <div className="page container">
        <div className="row article-content">
          <div className="col-md-12 items-center m-6 p-6">
            <Suspense fallback={<h1>Waiting for bullets</h1>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
        <div className="row article-content">
          <div className="col-md-12">
            <p>{article.body}</p>
            <ul className="tag-list">
              {article.tagList.map((tag) => (
                <li className="tag-default tag-pill tag-outline" key={tag}>
                  <Link to={`/tag/${tag}`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
