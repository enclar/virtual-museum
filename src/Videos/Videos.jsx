import "./Videos.css";

import VideoResults from "../VideoResults/VideoResults";
import Pagination from "../Pagination/Pagination";

const Videos = () => {        
    return (
        <div id="videos">
            <h1 >VIDEOS</h1>
            <VideoResults />
            <Pagination />
        </div>
    );
};

export default Videos;