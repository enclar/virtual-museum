import "./Explore.css";

import Filters from "./Filters/Filters";
import Results from "../Results/Results";
import Pagination from "../Pagination/Pagination";

const Explore = () => {
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