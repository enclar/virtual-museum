//! Component to display the videos

import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import urlcat from "urlcat";

import { DataContext } from "../../App";
import "./VideoResults.css";

const VideoResults = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const pagination = dataContext.museum.pagination // Pagination info
    const videoResults = dataContext.museum.videoResults; // Video data

    const getVideos = async () => {
        const url = urlcat("https://api.collection.cooperhewitt.org/rest/", {
            method: "cooperhewitt.videos.getList",
            access_token: "4845918c6c961dd37cbb22942d5c2ec8",
            page: pagination.currPage,
            per_page: "24",
        });

        try {
            dataContext.dispatch({type: "LOADING", value: "loading"});
            const response = await fetch(url);
            const data = await response.json();

            dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, totalPages: data.pages}}); // Updating the total number of pages
            dataContext.dispatch({type: "EXPLORE_VIDEOS", value: data.videos}); // Getting video results

            dataContext.dispatch({type: "LOADING", value: "done"});
        }

        catch (error) {
            dataContext.dispatch({type: "LOADING", value: "error"});
            console.log(error);
        }
    };

    useEffect(() => {
        getVideos();
    }, [pagination.currPage]);

    // Mapping out the available video reuslts
    const videos = videoResults.map((ele, index) => {
        return (
            <Link
                to={`/videos/${ele.id}`}
                key={index}
                className="video"
                onClick={() => dataContext.dispatch({type: "VIEW_DETAILS", value: ele})}
            />
        );
    });

    return (
        <div id="vid-results">
            {dataContext.museum.status == "loading" ? <progress /> : <div id="vid-container">{videos}</div>}
        </div>
    );
};

export default VideoResults;