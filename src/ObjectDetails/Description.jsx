//! Component to display the artwork description

import { useContext } from "react";
import { DataContext } from "../App";

const Description = () => {
    // Importing the context
    const dataContext = useContext(DataContext);
    const artwork = dataContext.museum.selectedArtwork;

    // Function to check if gallery text, description or NOT AVAIL should be displayed
    const getDescription = () => {
        if (artwork.gallery_text == null) {
            if (artwork.description == null) {
                return (
                    <span className="not-avail">Description not available</span>
                )
            } else {
                return artwork.description
            }
        } else {
            return artwork.gallery_text
        };
    };

    const description = getDescription();

    return (
        <div id="description" className="info-category">
            <h2>DESCRIPTION</h2>
            <h3>{description}</h3>
        </div>
    );
};

export default Description;