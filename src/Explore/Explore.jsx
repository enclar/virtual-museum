import { useEffect, useContext } from "react";
import urlcat from "urlcat";

import { DataContext } from "../App";
import "./Explore.css";

import Filters from "./Filters/Filters";
import Results from "../Results/Results";
import PaginationRev from "../Pagination/PaginationRev";

const ExploreRev = () => {
    // Importing context
    const dataContext = useContext(DataContext);

    return (
        <div id="explore">
            <h1>EXPLORE</h1>
            <Filters />
            <Results />
        </div>
    );
};

export default ExploreRev;