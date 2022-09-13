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

    // Function to check if gallery text or description should be displayed
    const getDescription = () => {
        if (artwork.gallery_text == null) {
            if (artwork.description == null) {
                return (
                    <span className="not-avail">Description not available</span>
                )
            } else {
                return (
                    artwork.description
                )
            }
        } else {
            return (
                artwork.gallery_text
            );
        };
    };

    // Mapping out the participants
    const participants = artwork.participants.map((ele, index) => {
        return (
            <h3>{ele.role_display_name} {ele.person_name}</h3>
        );
    });

    const description = getDescription();

    return (
        <div id="obj-details">

            <h1 id="title">{artwork.title_raw}</h1>

            <div id="container">
                <div id="frame">
                    <img id="img" src={artwork?.images[0]?.z?.url} alt="artwork" />
                </div>

                <div id="artwork-info">

                    <div id="description">
                        <h2>DESCRIPTION</h2>
                        <h3>{description}</h3>
                    </div>

                    <div id="details">
                        <h2>DETAILS</h2>
                        <h3>
                            <span className="category">Year of Acquisition</span>
                            < br />
                            {artwork.year_acquired == null ? <span className="not-avail">Date of Acquisition not available</span> : artwork.year_acquired}
                        </h3>
                        <h3>
                            <span className="category">Dimensions</span>
                            < br />
                            {artwork.dimensions == null ? <span className="not-avail">Dimensions not available</span> : artwork.dimensions}
                        </h3>
                        <h3>
                            <span className="category">Medium</span>
                            < br />
                            {artwork.medium == null ? <span className="not-avail">Media Type not available</span> : artwork.medium}
                        </h3>
                        <h3>
                            <span className="category">Colors</span>
                            < br />
                            <div id="swatches">{swatches}</div>
                        </h3>
                    </div>

                    <div id="participants">
                        <h2>PARTICIPANTS</h2>
                        <div>{participants}</div>
                    </div>

                    <div id="buttons">
                        <button
                            id="like-btn"
                            onClick={() => dataContext.dispatch({type: "ADD_TO_FAVS", value: artwork})}
                        >LIKE</button>
                        <Link
                            id="back-btn"
                            to="/explore"
                        >BACK</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ObjectDetails;