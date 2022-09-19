import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import "./Favs.css";

import FavResults from "./FavResults/FavResults";

const Favs = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const favourites = dataContext.museum.favourites; // Favourite artworks and videos

    // Using useEffect to keep track of users current location in website
    useEffect(() => {
        dataContext.dispatch({type: "UPDATE_CURR_LOCATION", value: "favs"})
    }, []);
    
    return (
        <div id="favs">
            <h1>FAVOURITES</h1>
            <FavResults />
        </div>
    );
};

export default Favs;