import { useEffect, useContext } from "react";
import { DataContext } from "../App";
import "./Explore.css";

import Filters from "./Filters/Filters";
import Results from "../Results/Results";
import Pagination from "../Pagination/Pagination";

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
            <Results />
            <Pagination />
        </div>
    );
};

export default Explore;