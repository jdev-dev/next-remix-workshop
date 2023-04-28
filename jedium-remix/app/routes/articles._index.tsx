import { useLoaderData } from "@remix-run/react";
import ArticleListPage from "libs/presentation/article-list.page";
import Layout from "libs/shared/ui/layout.component";
import AllArticlesLoader from 'libs/application/all-articles.loader';

export default function Articles() {    
    const { articles, tags,  articlesCount } = useLoaderData()

    return (
        <Layout tags={tags}>
            <ArticleListPage articleCount={articlesCount} articles={articles}></ArticleListPage>
        </Layout>
    );
}

export {AllArticlesLoader as loader}