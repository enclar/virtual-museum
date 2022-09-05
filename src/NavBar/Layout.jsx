import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Outlet />
        </React.Fragment>
    );
};

export default Layout;