import { useContext, useEffect } from "react";
import { DataContext } from "../App";
import "./Videos.css";

import VideoResults from "./VideoResults/VideoResults";
import Pagination from "../Pagination/Pagination";

const Videos = () => {        
    // Importing context
    const dataContext = useContext(DataContext);

    useEffect(() => {
        dataContext.dispatch({type: "UPDATE_CURR_LOCATION", value: "videos"}) // Logging current page
    }, []);

    return (
        <div id="videos">
            <div id="video-top">
                <h1 >VIDEOS</h1>
            </div>
            <div id="video-bottom">
                <div id="bottom-center">
                    <div id="lights"></div>
                    <VideoResults />
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default Videos;