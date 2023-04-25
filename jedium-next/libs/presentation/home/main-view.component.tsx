import ArticleListResolver from "@/libs/application/article-list.resolver"
import Tablist from "./tab-list.component"

const MainView = () => {
    return (
        <div className="col-md-9">
            <div className="feed-toggle">
                <Tablist/>
            </div>
            <ArticleListResolver/>
        </div>
    )
}

export default MainView