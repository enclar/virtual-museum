//! Component for like button

import { paginationClasses } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../App";

const Heart = ({ ele }) => {
    // Importing context
    const dataContext = useContext(DataContext);
    const favourites = dataContext.museum.favourites; // Favourites info

    const handleFav = (artwork) => {
        document.getElementById(artwork.id).classList.toggle("fav"); // Toggling the icon class

        if (!favourites.some(e => e.id == artwork.id)) { // If the artwork is not alr in favs
            dataContext.dispatch({type: "ADD_TO_FAVS", value: [...favourites, artwork]}); // Update favs array, adding artwork in
        } else if (favourites.some(e => e.id == artwork.id)) { // If the artwork is in favs
            const newFavs = favourites.filter(e => e.id != artwork.id); // Remove artwork from favs array
            dataContext.dispatch({type: "ADD_TO_FAVS", value: newFavs}); // Update favs array
        }
    };

    return (
        <div
            id={ele.id}
            className={!favourites.some(e => e.id == ele.id) ? "heart" : "heart fav"}
            onClick={() => handleFav(ele)}
        >&hearts;</div>
    );
};

export default Heart;