import Banner from "@/libs/presentation/home/banner.component";
import MainView from "@/libs/presentation/home/main-view.component";
import Head from "next/head";

const Articles = () => (
    <>
        <Head>
            <title>
                Jedium Next
            </title>
        </Head>
        <div className="home-page">
            <Banner/>
            <div className="container page">
                <div className="row">
                    <MainView/>
                    <div className="col-md-3">
                        <div className="sidebar">Popular Tags
                        {/* */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
)
export default Articles;