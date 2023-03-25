//! Component to display artworks for users to explore

import { useEffect, useContext, useState } from "react";
import { DataContext } from "../App";
import "./Explore.css";

import Filters from "./Filters/Filters";
import Results from "./Results/Results";
import Pagination from "../Pagination/Pagination";

const Explore = () => {
    // Importing context
    const dataContext = useContext(DataContext);

    // Setting up state
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        dataContext.dispatch({type: "UPDATE_CURR_LOCATION", value: "explore"}) // Logging current page
    }, []);

    // Function to show filters
    const showFilters = () => {
        setFilter(!filter);
    };

    return (
        <div id="explore">
            <div id="explore-top">
                <h1>EXPLORE</h1>
                {
                    !filter ?
                    <p id="filter-btn" onClick={showFilters}>FILTER ARTWORK</p> :
                    <Filters />
                }
            </div>
            <div id="explore-bottom">
                <div id="results-center">
                    <div id="lights"></div>
                    <Results />
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default Explore;