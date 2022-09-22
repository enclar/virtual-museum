//! Component to display artworks for users to explore

import { useEffect, useContext } from "react";
import { DataContext } from "../App";
import "./Explore.css";

import Filters from "./Filters/Filters";
import Results from "./Results/Results";
import PageNumbers from "./Results/PageNumbers";

const Explore = () => {
    // Importing context
    const dataContext = useContext(DataContext);

    useEffect(() => {
        dataContext.dispatch({type: "UPDATE_CURR_LOCATION", value: "explore"}) // Logging current page
    }, []);

    return (
        <div id="explore">
            <div id="explore-top">
                <h1>EXPLORE</h1>
                <Filters />
            </div>
            <div id="explore-bottom">
                <div id="results-left"></div>
                <div id="results-center">
                    <div id="lights"></div>
                    <Results />
                    <PageNumbers />
                </div>
                <div id="results-right"></div>
            </div>
        </div>
    );
};

export default Explore;