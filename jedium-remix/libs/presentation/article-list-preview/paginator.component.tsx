import { Link } from "@remix-run/react";
import { ENDPOINTS, setQueryParams } from "libs/shared/api/endpoints";
import Card from "libs/shared/ui/card.component";
import type { ReactElement } from "react";


type PaginatorProps = {
    articlesCount: any,
}

const ARTICLES_PER_PAGE = 10;

export default function Paginator({
    articlesCount,
}: PaginatorProps): ReactElement {

    const calcNumberOfPages = (totalArticles: number) => {
        let totalPages = Math.floor(totalArticles / ARTICLES_PER_PAGE);
        if (totalArticles % ARTICLES_PER_PAGE !== 0) {
            totalPages++
        }
        return totalPages;
    }

    const createGrid = (total: number) => {
        let grid = [];
        for (let i = 0; i < total; i++) {
            grid.push(
            <Link to={`${ENDPOINTS.ARTICLES}${setQueryParams({ limit: ARTICLES_PER_PAGE, offset: (i * ARTICLES_PER_PAGE) })}`}>
                <span className="mx-1 px-1 border">{i + 1}</span>
            </Link>)
        }
        return <Card className="place-items-center hover:border-stone-400">
            {...grid}
        </Card>
    }

    return <div className="flex m-6 place-items-center">
        {createGrid(calcNumberOfPages(articlesCount))}
    </div>
}