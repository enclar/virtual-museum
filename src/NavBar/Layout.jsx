import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const Layout = () => {
    return (
        <div id="hdr-layout">
            <NavBar />
            <Outlet id="outlet" />
        </div>
    );
};

export default Layout;