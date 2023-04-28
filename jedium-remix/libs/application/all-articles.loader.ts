import type { LoaderArgs } from "@remix-run/node";
import { Repository } from "libs/adapter";

export default async function AllArticlesLoader(params:LoaderArgs) {
    const [articleResponse, tagsReponse] = await Promise.all([
        Repository.ArticlesTags.getAllArticles(),
        Repository.ArticlesTags.getTags(),
    ]);

    return {
        articles: articleResponse.articles,
        tags: tagsReponse.tags,
        articlesCount: articleResponse.articlesCount
    }
}
