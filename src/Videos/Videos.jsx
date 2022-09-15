import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import urlcat from "urlcat";
import { DataContext } from "../App";
import "./Videos.css";

const Videos = () => {
    // Importing info via useContext
    const dataContext = useContext(DataContext);

    // Pulling the video results when page loads
    useEffect(() => {
        const getVideos = async () => {
            const url = urlcat ("https://api.collection.cooperhewitt.org/rest/", {
                method: "cooperhewitt.videos.getList",
                access_token: "4845918c6c961dd37cbb22942d5c2ec8",
                page: "1",
                per_page: "20",
            });

            try {
                dataContext.dispatch({type: "LOADING", value: "loading"});
                const response = await fetch(url);
                const data = await response.json();
                dataContext.dispatch({type: "EXPLORE_VIDEOS", value: data.videos});
                dataContext.dispatch({type: "LOADING", value: "done"});
            }
            catch (error) {
                dataContext.dispatch({type: "LOADING", value: "error"});
                console.log(error);
            }
        };

        getVideos();
    }, []);

    const vids = dataContext.museum.videos.map((ele, index) => {
        return (
            <Link to={`/videos/${ele.id}`} key={index}>
                <h1 
                    className="video" 
                    onClick={() => dataContext.dispatch({type: "VIEW_DETAILS", value: ele})}
                >{ele.title}</h1>
            </Link>
        );
    });
    
    return (
        <div id="videos">
            <h1 >VIDEOS</h1>
            <div id="vid-container">
                {dataContext.museum.status == "loading" ? <progress /> : vids}
            </div>
        </div>
    );
};

export default Videos;