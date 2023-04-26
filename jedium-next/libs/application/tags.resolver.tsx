import ArticleTagsApi from "@/libs/adapter/article-tags.repository";
import LoadingOrError from "../shared/common/loading-or-error";
import Tags from "../presentation/home/tags.component";

const TagstResolver = () => {

    const { response, isError, isLoading } = ArticleTagsApi.useGetTags();

    return (isError || isLoading)
        ? <LoadingOrError customMessage={'Cannot load popular tags...'} isError={isError} isLoading={isLoading} />
        : <Tags tags={response.tags} />
}

export default TagstResolver;
