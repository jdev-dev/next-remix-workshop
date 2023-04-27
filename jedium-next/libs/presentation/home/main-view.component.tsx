import ArticleListResolver from "@/libs/application/article-list.resolver"
import Tablist from "./tab-list.component"
import TagListResolver from "@/libs/application/tag-list.resolver"

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