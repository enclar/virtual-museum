import { useEffect, useContext } from "react";
import urlcat from "urlcat";

import { DataContext } from "../App";
import "./ExploreRev.css";

import Filters from "./Filters/Filters";

const ExploreRev = () => {
    // Importing context
    const dataContext = useContext(DataContext);


    return (
        <div id="explore">
            <h1>EXPLORE</h1>
            <Filters />
        </div>
    );
};

export default ExploreRev;