import ArticleTagsApi from "../adapter/article-tags.repository";
import ArticleList from "../presentation/articles/article-list.component";
import LoadingOrError from "../shared/common/loading-or-error";

const ArticleListResolver = () => {
    const {response, isError, isLoading} = ArticleTagsApi.useGetAllArticles();
    return (isError || isLoading)
        ? <LoadingOrError isError ={isError} isLoading={isLoading} customMessage ={"No articles"} />
        : <ArticleList articles={response.articles}/>
}

export default ArticleListResolver