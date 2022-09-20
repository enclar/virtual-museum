import { useContext } from "react";
import { Link } from "react-router-dom"

import { DataContext } from "../App";
import "./NavBar.css";

const NavBar = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const pagination = dataContext.museum.pagination; // Pagination info

    return (
        <header id="header">
            <Link to="/" id="header-title">COOPER HEWITT</Link>

            <nav>
                <ul id="nav">
                    <li
                        className="nav-page"
                        onClick={() => dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, currPage: "1"}})} // Setting state to ensure first page of results is shown 
                    >
                        <Link className="nav-link" to="/explore">explore</Link>
                    </li>
                    <li 
                        className="nav-page"
                        onClick={() => dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, currPage: "1"}})} // Setting state to ensure first page of results is shown}
                    >
                        <Link className="nav-link" to="/videos">videos</Link>
                    </li>
                    <li className="nav-page">
                        <Link className="nav-link" to="/favs">favs</Link>
                    </li>
                    <li className="nav-page">
                        <Link className="nav-link" to="/plan">plan your visit</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;