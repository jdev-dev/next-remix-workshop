import type { ArticlesTagRepositoryI } from "libs/domain/ports/articles-tags.repository";
import { ArticleListSchema } from "libs/domain/entity/article.schema";
import { TagsSchema } from "libs/domain/entity/tag.schema";
import { ENDPOINTS } from "libs/shared/api/endpoints";

export function ArticleTagRepository(): ArticlesTagRepositoryI {

    async function getAllArticles(queryString = '') {
        const response = await fetch(`${process.env.PUBLIC_API_BASE_URL}${ENDPOINTS.ARTICLES}${queryString}`);
        const jsonResonse = await response.json();
        const articles = ArticleListSchema.parse(jsonResonse);
        return articles;
    }

    async function getTags() {
        const tagsResponse = await fetch(`${process.env.PUBLIC_API_BASE_URL}${ENDPOINTS.TAGS}`);
        const tagsJsonResonse = await tagsResponse.json();
        const tags = TagsSchema.parse(tagsJsonResonse);
        return tags;
    }

    return { 
        getAllArticles,
        getTags,
     };
}