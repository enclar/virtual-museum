import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

import "./ResultsRev.css";

const ResultsRev = () => {
    const dataContext = useContext(DataContext);
    const searchResults = dataContext.museum.searchResults;

    const artworks = searchResults.map((ele, index) => {
        return (
            <Link className="artwork" to={`/explore/${ele.id}`} key={index}>
                <img
                    className="artwork"
                    alt={ele?.title}
                    src={ele?.images[0]?.b?.url}
                    onClick={() => {
                        dataContext.dispatch({type: "SWITCH_IMAGE", value: 0})
                        dataContext.dispatch({type: "VIEW_DETAILS", value: ele})
                    }}
                />
            </Link>
        );
    });

    const getResults = () => {
        if (dataContext.museum.status == "loading") {
            return <progress />
        } else if (dataContext.museum.searchResults == []) {
            return <h3>No Artwork Available</h3>
        } else {
            return artworks
        };
    };

    const results = getResults();

    return (
        <div id="results">
            <h3>click to view detailed artwork and description</h3>
            <div id="img-container">
                {results}
            </div>
        </div>
    );
};

export default ResultsRev;