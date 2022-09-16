import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import urlcat from "urlcat";
import { DataContext } from "../App";
import "./Videos.css";

import Pagination from "../Pagination/Pagination";

const Videos = () => {
    // Importing info via useContext
    const dataContext = useContext(DataContext);

    const pageInfo = dataContext.museum.pagination

    // Pulling the video results when page loads
    useEffect(() => {
        const getVideos = async (page) => {
            const url = urlcat ("https://api.collection.cooperhewitt.org/rest/", {
                method: "cooperhewitt.videos.getList",
                access_token: "4845918c6c961dd37cbb22942d5c2ec8",
                page,
                per_page: "20",
            });

            try {
                dataContext.dispatch({type: "LOADING", value: "loading"});
                const response = await fetch(url);
                const data = await response.json();

                // Passing search results to the reducer
                dataContext.dispatch({type: "EXPLORE_VIDEOS", value: data.videos});

                // Passing page info to the reducer
                const pageNums = Array.from({length: data.pages}, (_, i) => (i + 1).toString());
                dataContext.dispatch({type: "SWITCH_PAGE", value: {...pageInfo, total: pageNums}});

                dataContext.dispatch({type: "LOADING", value: "done"});
            }

            catch (error) {
                dataContext.dispatch({type: "LOADING", value: "error"});
                console.log(error);
            }
        };

        getVideos(pageInfo.current);
    }, [pageInfo.current]); // Re-render every time the page value changes

    const videoArr = dataContext?.museum?.videoList;

    const vids = videoArr.map((ele, index) => {
        return (
            <Link to={`/videos/${ele.id}`} key={index}>
                <h1 
                    className="video" 
                    onClick={() => dataContext.dispatch({type: "VIEW_DETAILS", value: ele})}
                >{ele?.title}</h1>
            </Link>
        );
    });


        
    return (
        <div id="videos">
            <h1 >VIDEOS</h1>
            <div id="vid-container">
                {dataContext.museum.status == "loading" ? <progress /> : vids}
            </div>
            <Pagination />
        </div>
    );
};

export default Videos;