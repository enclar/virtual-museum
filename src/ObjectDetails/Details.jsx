//! Component to display the artwork details (YOA/Dimensons/Media Type/Colors)

import { useContext } from "react";
import { DataContext } from "../App";

const Details = () => {
    // Importing the context
    const dataContext = useContext(DataContext);
    const artwork = dataContext.museum.selectedArtwork;

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
        <div id="details" className="info-category">
            <h2>DETAILS</h2>

            {artwork.year_acquired == null ?
                <span className="not-avail">Year of Acquisition not available</span> :
                <h3>
                    <span className="category">Year of Acquisition</span>
                    <br />
                    {artwork.year_acquired}
            </h3>}

            {artwork.dimensions == null ?
            <span className="not-avail">Dimensions not available</span> :
            <h3>
                <span className="category">Dimensions</span>
                <br />
                {artwork.dimensions}
            </h3>}

            {artwork.medium == null ?
            <span className="not-avail">Media Type not available</span> :
            <h3>
                <span className="category">Medium</span>
                <br />
                {artwork.medium}
            </h3>}

            {dataContext.museum.currSwatches.length == 0 ?
            <span className="not-avail">Color Swatches not available</span> :
            <h3>
                <span className="category">Colors</span>
                <br />
                <div id="swatches">{swatches}</div>
            </h3>}
        </div>    
    );
};

export default Details;