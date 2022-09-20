import { useContext, useEffect } from "react";
import { DataContext } from "../App";
import "./Videos.css";

import VideoResults from "./VideoResults/VideoResults";
import Pagination from "../Explore/Results/PageNumbers";

const Videos = () => {        
    // Importing context
    const dataContext = useContext(DataContext);

    useEffect(() => {
        dataContext.dispatch({type: "UPDATE_CURR_LOCATION", value: "videos"}) // Logging current page
    }, []);

    return (
        <div id="videos">
            <h1 >VIDEOS</h1>
            <VideoResults />
            <Pagination />
        </div>
    );
};

export default Videos;