import { useLoaderData } from "@remix-run/react";
import Layout from "libs/shared/ui/layout.component";
import { AllArticlesLoader } from "libs/application/all-articles.loader";
import ArticleListPage from "libs/presentation/article-list.page"

export default function Articles() {
  type ArticlesLoaderType = Awaited<ReturnType<typeof AllArticlesLoader>>;

  const { articles, articleCount , tags } = useLoaderData() as ArticlesLoaderType;
  return (
    <Layout tags={tags}>
      <ArticleListPage articles={articles} articleCount= {articleCount} />
    </Layout>
  );
}

export { AllArticlesLoader as loader };