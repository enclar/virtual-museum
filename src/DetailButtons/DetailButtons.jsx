import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

const DetailButtons = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const favourites = dataContext.museum.favourites; // Favourite artworks and videos
    const currLocation = dataContext.museum.currLocation; // Current location within the webpage

    const handleFavs = (selected) => {
        if (currLocation == "explore") { // Checking for artwork
            dataContext.dispatch({type: "ADD_TO_FAVS", value: {...favourites, artworks: [...favourites.artworks, selected]}})
        } else if (currLocation == "videos") { // Checking for video
            dataContext.dispatch({type: "ADD_TO_FAVS", value: {...favourites, videos: [...favourites.videos, selected]}})
        }
    };

    return (
        <div id="detail-buttons">
            <button
                    id="like-btn"
                    onClick={() => handleFavs(dataContext.museum.selectedArtwork)}
            >LIKE</button>
            <Link id="back-btn" to={`/${currLocation}`}>BACK</Link>
        </div>
    );
};

export default DetailButtons;