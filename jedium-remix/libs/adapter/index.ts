import { ArticleTagsRepository } from "./articles-tags.repository";

function buildRepository() {
    return {
        ArticlesTags: {...ArticleTagsRepository()}
    };
}

export const Repository = buildRepository();