import ArticleListResolver from "@/libs/application/article-list.resolver";
import TabList from "./tab-list.component";

const MainView = () => {
    return (
    <div className="col-md-9">
        <div className="feed-toggle">
            <TabList />
        </div>
        <ArticleListResolver />
    </div>
    )
} 

export default MainView;