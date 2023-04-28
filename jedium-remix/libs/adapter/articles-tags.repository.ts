import type { ArticleTagsI } from "libs/domain/ports/article-tags.repository";
import { ArticleListSchema } from "libs/domain/entity/article.schema";
import { ENDPOINTS } from "libs/shared/api/endpoints";
import { TagsSchema } from "libs/domain/entity/tag.schema";

export function ArticleTagsRepository() : ArticleTagsI {
    async function getAllArticles() {
        const response = await fetch(`${process.env.PUBLIC_API_BASE_URL}${ENDPOINTS.ARTICLES}`);
        const data = await response.json();
        const articles = ArticleListSchema.parse(data);
        return articles;
    }

    async function getTags() {
        const response = await fetch(`${process.env.PUBLIC_API_BASE_URL}${ENDPOINTS.TAGS}`);
        const data = await response.json();
        const tags = TagsSchema.parse(data);
        return tags;
    }

    return {
        getAllArticles,
        getTags,
    }
}