//! Maps out the categories which the user can explore via

import { useContext } from "react";
import { DataContext } from "../../App";
import params from "../exploreParams";

const ExploreParams = () => {
    // Setting up context
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
        <div id="param-container">{exploreParams}</div>
    );
};

export default ExploreParams;