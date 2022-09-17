import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../App";

import "./ResultsArchive.css";
import Pagination from "../../../Pagination/Pagination";

const Results = () => {
    // Importing data from App
    const dataContext = useContext(DataContext);

    // Saving the result array into a variable
    const searchResults = dataContext.museum.searchResults;

    const results = searchResults.map((ele, index) => {
        if (searchResults != []) {
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
        }    
    });

    return (
        <div id="results">
            <h3>click thumbnail to view detailed artwork and description</h3>
            {dataContext.museum.status == "loading" ? <progress /> : <div id="img-container">{results}</div>}
            <Pagination />
        </div>
    );
};

export default Results;