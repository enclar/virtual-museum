import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import "./VideoDetails.css";

const VideoDetails = () => {
    // Importing context
    const dataContext = useContext(DataContext);

    const videoInfo = dataContext.museum.selectedArtwork;

    return (
        <div id="vid-details">
            <h1>{videoInfo.title}</h1>
            <iframe src={videoInfo?.formats?.mp4?.[1080]} allow="autoplay"></iframe>
            <h2>{videoInfo.description}</h2>
            <Link to="/videos">BACK</Link>
        </div>
    );
};

export default VideoDetails;