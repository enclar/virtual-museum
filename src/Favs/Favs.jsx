import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import "./Favs.css";

const Favs = () => {
    const dataContext = useContext(DataContext);
    console.log("Favs:", dataContext.museum.favArtworks);

    const favArtworks = dataContext.museum.favArtworks;

    const favs = favArtworks.map((ele, index) => {
        if (favArtworks !== [] && ele.id !== null) {
            return (
                <Link className="artwork" to={`/details/${ele.id}`} key={index}>
                    <img
                        className="artwork"
                        alt={ele?.title}
                        src={ele?.images[0]?.b?.url}
                        onClick={() => dataContext.dispatch({type: "VIEW_DETAILS", value: ele})}
                    />
                </Link>
            );
        };
    });
    
    return (
        <div id="favs">
            <h1>FAVOURITES</h1>
            <div id="fav-container">
                {favs}
            </div>
        </div>
    );
};

export default Favs;