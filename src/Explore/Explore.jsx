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
            <h1>EXPLORE</h1>
            <Filters />
            <div id="lights"></div>
            <Results />
            <PageNumbers />
        </div>
    );
};

export default Explore;