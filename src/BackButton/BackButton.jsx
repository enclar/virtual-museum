import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

import "./BackButton.css";

const BackButton = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const currLocation = dataContext.museum.currLocation; // Current location within the webpage

    return (
        <div id="detail-buttons">
            <Link id="back-btn" to={`/${currLocation}`}>BACK</Link>
        </div>
    );
};

export default BackButton;