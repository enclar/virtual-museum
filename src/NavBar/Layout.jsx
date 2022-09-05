import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const Layout = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Outlet />
        </React.Fragment>
    );
};

export default Layout;