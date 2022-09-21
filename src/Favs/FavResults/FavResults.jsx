import { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../../App";
import "./FavResults.css";

const FavResults = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const favourites = dataContext.museum.favourites; // Favourite artworks and videos

    // Mapping out favourite artworks
    const artworks = favourites.map((ele) => {
        return (
            <div className="fav-div">
                <Link className="fav-link" to={`/favs/${ele.id}`}>
                    <img
                        className="fav-img"
                        alt={ele?.title}
                        src={ele?.images[0]?.sq?.url}
                        onClick={() => {
                            dataContext.dispatch({type: "SWITCH_IMAGE", value: 0}) // Making sure the first image is shown when details page is opened
                            dataContext.dispatch({type: "VIEW_DETAILS", value: ele}) // Passing on the details of chosen artwork to be displayed
                        }}
                    />
                </Link>
            </div>
        );
    });

    return (
        <div id="fav-results">
            {artworks}
        </div>
    );
};

export default FavResults;