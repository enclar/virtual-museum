//! Component to display details of video details

import { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../App";
import "./VideoDetails.css";

// Importing components
import BreadCrumbs from "../ObjectDetails/BreadCrumbs";
import BackButton from "../ObjectDetails/BackButton";

const VideoDetails = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const videoInfo = dataContext.museum.selectedArtwork; // Info of selected video

    return (
        <div id="vid-details">
            <BreadCrumbs />
            <h1>{videoInfo.title}</h1>
            <iframe src={videoInfo?.formats?.mp4?.[1080]} allow="autoplay"></iframe>
            <h3>{videoInfo.description}</h3>
            <BackButton />
        </div>
    );
};

export default VideoDetails;