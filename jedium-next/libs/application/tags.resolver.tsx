import ArticleTagsApi from "../adapter/article-tags.repository";
import Tags from "../presentation/articles/tags-preview.component";
import LoadingOrError from "../shared/common/loading-or-error";

const TagsResolver = () => {
    
    const {response, isError, isLoading} = ArticleTagsApi.useGetTags();
    return (isError || isLoading) 
        ? <LoadingOrError isError={isError} isLoading={isLoading} customMessage= {"No articles"}/>
        : <Tags tags={response.tags} />

}

export default TagsResolver