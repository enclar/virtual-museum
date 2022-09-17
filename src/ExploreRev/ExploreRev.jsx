import { useEffect, useContext } from "react";
import urlcat from "urlcat";

import { DataContext } from "../App";
import "./ExploreRev.css";

import Filters from "./Filters/Filters";
import ResultsRev from "../Results/Results";

const ExploreRev = () => {
    // Importing context
    const dataContext = useContext(DataContext);


    return (
        <div id="explore">
            <h1>EXPLORE</h1>
            <Filters />
            <ResultsRev />
        </div>
    );
};

export default ExploreRev;