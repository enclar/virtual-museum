import React, { ReactFragment, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import "./ObjectDetails.css";

const ObjectDetails = () => {
    const dataContext = useContext(DataContext);
    // console.log("Selected Art:", dataContext.museum.selectedArtwork);
    const artwork = dataContext.museum.selectedArtwork;
    // console.log("Artwork Details:", artwork);

    return (
        <div id="obj-details">
            <h1 id="title">{artwork?.title}</h1>
            <img id="img" src={artwork?.images[0]?.z?.url} alt="artwork" />
            <div id="description">
                <h2>{artwork?.description}</h2>
                <h3>Dimensions: {artwork?.dimensions}</h3>
                <h3>Medium: {artwork?.medium}</h3>
                <br />
                <h3>Date: {artwork?.date}</h3>
                <h3>Year of Acquisition: {artwork?.year_acquired} </h3>
                <h3>Medium: {artwork?.medium}</h3>
                <br />
                <h3 id="credit-line">{artwork?.creditline}</h3>
            </div>
            <div id="buttons">
                <button
                    id="like-btn"
                    onClick={() => dataContext.dispatch({type: "ADD_TO_FAVS", value: artwork})}
                >LIKE</button>
                <Link to={"/explore/color"}>BACK</Link>
            </div>

        </div>
    );
};

export default ObjectDetails;