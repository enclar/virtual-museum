import React, { ReactFragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import "./ObjectDetails.css";

const ObjectDetails = () => {
    const dataContext = useContext(DataContext);
    const artwork = dataContext.museum.selectedArtwork;
    console.log("Artwork Details:", artwork);

    useEffect(() => {
        const getColors = async (id) => {
            const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getColors&access_token=424df56959749911df1c9f8b3ba62ba4&id=${id}`
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                dataContext.dispatch({type: "GET_ARTWORK_SWATCHES", value: data.colors})
            }
            
            catch (error) {
                console.log(error)
            };
        };

        getColors(artwork.id);
    }, []);

    const swatches = dataContext.museum.currSwatches.map((ele, index) => {
        return (
            <div
                style={{background: ele.color}}
                className="currSwatch"
                key={index}
            ></div>
        );
    });

    return (
        <div id="obj-details">
            <h1 id="title">{artwork?.title}</h1>
            <div id="frame">
                <img id="img" src={artwork?.images[0]?.z?.url} alt="artwork" />
            </div>
            <div id="currSwatches">{swatches}</div>
            <div id="description">
                <h2>{artwork?.description}</h2>
                <h3>Dimensions: {artwork?.dimensions}</h3>
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