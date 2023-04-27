import ArticleTagsApi from "../adapter/article-tags.repository"
import ArticleList from "../presentation/articles/article-list.component";
import LoadingOrError from "../shared/common/loading-or-error";

const TagListResolver = () => {
    // const {response, isError, isLoading} = ArticleTagsApi.useGetTags();
    // return (isError || isLoading)
    //     ?<LoadingOrError isError={isError} isLoading={isLoading} customMessage={"No Tags"}/>
    //     // : <ArticleList/>
}

export default TagListResolver