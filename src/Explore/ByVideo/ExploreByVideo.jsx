import { useEffect, useContext } from "react"
import { DataContext } from "../../App";

const ExploreByVideo = () => {

    const dataContext = useContext(DataContext);

    useEffect(() => {
        const getVideos = async () => {
            const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.videos.getList&access_token=4845918c6c961dd37cbb22942d5c2ec8&page=1&per_page=28"

            try {
                dataContext.dispatch({type: "LOADING", value: "loading"});
                const response = await fetch(url);
                const data = await response.json();
                // dataContext.dispatch({type: "FILTER_ART", value: data.videos});
                dataContext.dispatch({type: "LOADING", value: "done"})
            }

            catch (error) {
                console.log(error);
            }
        };

        getVideos(); 
    }, []);

    return (
        <div id="videos">
            <h1>EXPLORE VIDEOS</h1>
        </div>
    );
};

export default ExploreByVideo;