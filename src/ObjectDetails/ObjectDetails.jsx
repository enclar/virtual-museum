import React, { ReactFragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import "./ObjectDetails.css";

const ObjectDetails = () => {
    const dataContext = useContext(DataContext);
    const artwork = dataContext.museum.selectedArtwork;
    console.log("Artwork Details:", artwork);

    // Getting the main colors of the artwork
    useEffect(() => {
        const getColors = async (id) => {
            const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getColors&access_token=4845918c6c961dd37cbb22942d5c2ec8&id=${id}`
            
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

    // Mapping the main colors into swatches
    const swatches = dataContext.museum.currSwatches.map((ele, index) => {
        return (
            <div
                style={{background: ele.color}}
                className="swatch"
                key={index}
            ></div>
        );
    });

    return (
        <div id="obj-details">

            <h1 id="title">{artwork?.title}</h1>

            <div id="container">
                <div id="frame">
                    <img id="img" src={artwork?.images[0]?.z?.url} alt="artwork" />
                </div>

                <div id="artwork-info">

                    <div id="description">
                        <h2>DESCRIPTION</h2>
                        <h3>{artwork?.description == null ? <span className="not-avail">Description not available</span> : artwork.description}</h3>
                    </div>

                    <div id="details">
                        <h2>DETAILS</h2>
                        <h3>
                            <span className="category">Dimensions</span>
                            < br />
                            {artwork?.dimensions == null ? <span className="not-avail">Dimensions not available</span> : artwork.dimensions}
                        </h3>
                        <h3>
                            <span className="category">Medium</span>
                            < br />
                            {artwork?.medium == null ? <span className="not-avail">Media Type not available</span> : artwork.medium}
                        </h3>
                        <h3>
                            <span className="category">Colors</span>
                            < br />
                            <div id="swatches">{swatches}</div>
                        </h3>
                    </div>
                    
                    <h3>Year of Acquisition: {artwork?.year_acquired} </h3>
                    <br />
                    <h3 id="credit-line">{artwork?.creditline}</h3>

                    <div id="buttons">
                        <button
                            id="like-btn"
                            onClick={() => dataContext.dispatch({type: "ADD_TO_FAVS", value: artwork})}
                        >LIKE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ObjectDetails;