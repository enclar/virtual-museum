import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import "./Explore.css";

import params from "./exploreParams";

import ParamOptions from "./ParamOptions/ParamOptions";
import Results from "./Results/Results";

const Explore = () => {
    // Importing the context provided in App.jsx
    const dataContext = useContext(DataContext);

    // Mapping out the params which users can use to explore the artworks
    const exploreParams = params.map((ele, index) => {
        return (
            <div
                className="explore-param"
                to={`/explore/${ele.link}`}
                onClick={() => dataContext.dispatch({type: "EXPLORE_BY", value: ele.link})}
                key={index}
            >{ele.name}</div>
        );
    });

    return (
        <div id="explore">
            <div id="explore-title">
                <h1>EXPLORE</h1>
                <h3>explore our collection of digitized exhibits at your own leisure</h3>
            </div>

            <div id="param-container">
                {exploreParams}
            </div>

            <ParamOptions />
            <Results />
        </div>
    );
};

export default Explore;