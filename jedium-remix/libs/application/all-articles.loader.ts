import type { LoaderArgs } from "@remix-run/node";

import { Repository } from "libs/adapter";

export async function AllArticlesLoader({ request }: LoaderArgs) {
  const url = new URL(request.url)
  const [articlesResponse, tagsResponse]= await Promise.all([
    Repository.ArticlesAndTags.getAllArticles('?'+url.searchParams.toString()),
    Repository.ArticlesAndTags.getTags()
  ]);
  
  return { 
    articles: articlesResponse.articles, 
    articleCount: +articlesResponse.articlesCount, 
    tags: tagsResponse.tags 
  };
}
