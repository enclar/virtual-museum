//! Overall explore page 

import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import "./ExploreArchive.css";

import ExploreParams from "./ExploreParams&Options/ExploreParams";
import ParamOptions from "./ExploreParams&Options/ParamOptions";
import Results from "./ResultsArchive/ResultsArchive";

const Explore = () => {
    // Importing the context provided in App.jsx
    const dataContext = useContext(DataContext);

    return (
        <div id="explore">
            <div id="explore-title">
                <h1>EXPLORE</h1>
                <h3>explore our collection of digitized exhibits at your own leisure</h3>
            </div>

            <ExploreParams />
            <ParamOptions />

            {dataContext.museum.currExploreParam == null ? <div></div> : <Results />}
        </div>
    );
};

export default Explore;