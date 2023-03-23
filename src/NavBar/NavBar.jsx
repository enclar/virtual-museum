import { useContext } from "react";
import { Link } from "react-router-dom"
import { DataContext } from "../App";
import "./NavBar.css";


const NavBar = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const pagination = dataContext.museum.pagination; // Pagination info

    return (
        <header id="hdr">
            <div id="hdr-text">
                <Link to="/" id="hdr-title">
                        COOPER<br/>
                        HEWITT
                </Link>

                <nav>
                    <ul id="hdr-nav">
                        <li
                            onClick={() => dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, currPage: "1"}})} // Setting state to ensure first page of results is shown 
                        >
                            <Link className="hdr-nav-link" to="/explore">EXPLORE</Link>
                        </li>
                        <li 
                            onClick={() => dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, currPage: "1"}})} // Setting state to ensure first page of results is shown}
                        >
                            <Link className="hdr-nav-link" to="/videos">VIDEOS</Link>
                        </li>
                        <li>
                            <Link className="hdr-nav-link" to="/favs">FAVS</Link>
                        </li>
                        <li>
                            <Link className="hdr-nav-link" to="/visit">VISIT</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};

export default NavBar;