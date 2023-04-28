import React, { ReactElement } from "react";

import Navbar from "./navbar.component";
import Footer from "./footer.component";
import { NextPage } from "next";

type LayoutPropsType = {
    children: ReactElement
}

const Layout: NextPage<LayoutPropsType> = ({ children }) => (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
);

export default Layout;
