import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";

import "./Results.css";

const Results = () => {
    // Importing data from App
    const dataContext = useContext(DataContext);

    // Saving the result array into a variable
    const searchResults = dataContext.museum.searchResults;
    console.log(searchResults);

    const results = searchResults.map((ele) => {
        if (searchResults !== []) {
            return (
                <Link className="artwork" to={`/details/${ele.id}`}>
                    <img
                        className="artwork"
                        src={ele.images[0].sq.url}
                        onClick={() => dataContext.dispatch({type: "VIEW_DETAILS", value: ele})}
                    />
                </Link>
            );
        };
    });

    return (
        <div id="results">
            <h3>click thumbnail to view detailed artwork and description</h3>
            <div id="img-container">
                {results}
            </div>
        </div>
    );
};

export default Results;