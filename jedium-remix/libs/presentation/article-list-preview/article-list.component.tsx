
export default function ArticleList({
  articles,
  articleCount,
}: ArticleListProps): ReactElement {
  return (<>
    {articles.map((article, idx) => (
      <Card className={`hover:border-orange-500`} key={`${article.slug}${idx}`}>
        <div className="article-preview" key={article.slug}>
          <div className="article-meta">
            <Link to={`/author/${article.author.username}`}>
              <img src={article.author.image} alt="" />
            </Link>
            <div className="info">
              <Link
                to={`/author/${article.author.username}`}
                className="author"
              >
                {article.author.username}
              </Link>
              <span className="date">{article.updatedAt}</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
              <i className="ion-heart"></i> {article.favoritesCount}
            </button>
          </div>
          <Link to={`/articles/${article.slug}`} className="preview-link">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
            {article.tagList.length > 0 && (
              <ul className="tag-list">
                {article.tagList.map((tag) => (
                  <li className="tag-default tag-pill tag-outline" key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </Link>
        </div>
      </Card>
    ))}
    <Paginator articlesCount={articleCount} />
  </>)
}