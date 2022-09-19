import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";

const FavResults = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const favourites = dataContext.museum.favourites; // Favourite artworks and videos

    // Mapping out favourite artworks
    const artworks = favourites.artworks.map((ele) => {
        return (
            <Link className="artwork" to={`/favs/${ele.id}`}>
                <img
                    className="artwork"
                    alt={ele?.title}
                    src={ele?.images[0]?.b?.url}
                    onClick={() => {
                        dataContext.dispatch({type: "SWITCH_IMAGE", value: 0}) // Making sure the first image is shown when details page is opened
                        dataContext.dispatch({type: "VIEW_DETAILS", value: ele}) // Passing on the details of chosen artwork to be displayed
                    }}
                />
                <h4>{ele.title}</h4>
            </Link>
        );
    });

    return (
        <div id="fav-results">
            {artworks}
        </div>
    );
};

export default FavResults;