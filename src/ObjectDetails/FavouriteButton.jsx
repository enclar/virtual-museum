import { useContext } from "react";
import { DataContext } from "../App";

const FavouriteButton = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const favourites = dataContext.museum.favourites; // Fav artwork info
    const selectedArtwork = dataContext.museum.selectedArtwork; // Selected artwork info

    // Function to handle like
    const handleFav = () => {
        // Turn heart pink
        document.getElementById("heart").classList.toggle("fav");

        // Adding into favs list
        dataContext.dispatch({type: "ADD_TO_FAVS", value: {artworks: [...favourites.artworks, selectedArtwork], artwork_ids: [...favourites.artwork_ids, selectedArtwork.id]}});
    }

    return (
        <div
            id="heart"
            className="not-fav"
            onClick={handleFav}
        >&hearts;</div>
    );
};

export default FavouriteButton;