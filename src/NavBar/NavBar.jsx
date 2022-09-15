import { Link } from "react-router-dom"
import "./NavBar.css";

const NavBar = () => {
    return (
        <header id="header">
            <div>
                <Link to="/">
                    <h1 id="nav-title">COOPER HEWITT
                    <br />
                    <span id="nav-descript">smithsonian design museum</span></h1>
                </Link>
            </div>
            <nav>
                <ul id="nav">
                    <li className="nav-page">
                        <Link className="nav-link" to="/explore">explore</Link>
                    </li>
                    <li className="nav-page">
                        <Link className="nav-link" to="/curate">videos</Link>
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