import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import "./Explore.css";

import params from "./exploreParams";

const Explore = () => {
    const dataContext = useContext(DataContext);

    const exploreParams = params.map((ele, index) => {
        return (
            <Link
                className="explore-cat"
                to={`/explore/${ele.link}`}
                onClick={() => dataContext.dispatch({type: "EXPLORE_BY", value: ele.link})}
                key={index}
            >{ele.name}</Link>
        );
    });

    return (
        <div id="explore">
            <div id="explore-title">
                <h1>EXPLORE</h1>
                <h3>explore our collection of digitized exhibits at your own leisure</h3>
            </div>
            <div id="explore-container">
                {exploreParams}
            </div>
        </div>
    );
};

export default Explore;