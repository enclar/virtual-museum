//! Maps out the categories which the user can explore via

import { useContext } from "react";
import { DataContext } from "../../App";
import params from "../exploreParams";

const ExploreParams = () => {
    // Setting up context
    const dataContext = useContext(DataContext);

    // Setting up function to handle click
    const handleParamSelection = async (ele) => {
        
        // Getting the search params
        dataContext.dispatch({type: "EXPLORE_BY", value: ele.link});

        const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=4845918c6c961dd37cbb22942d5c2ec8&${ele.searchKey}=${ele.firstVal}&page=1&per_page=30`;

        // Fetching the first set of results
        try {
            dataContext.dispatch({type: "LOADING", value: "loading"})
            const response = await fetch(url);
            const data = await response.json();
            dataContext.dispatch({type: "FILTER_ART", value: data.objects})
            dataContext.dispatch({type: "LOADING", value: "done"})
        }

        catch (error) {
            dataContext.dispatch({type: "LOADING", value: "error"})
            console.log(error);
        }
    };

    // Mapping out the params which users can use to explore the artworks
    const exploreParams = params.map((ele, index) => {
        return (
            <div
                className="explore-param"
                to={`/explore/${ele.link}`}
                onClick={() => handleParamSelection(ele)}
                key={index}
            >{ele.name}</div>
        );
    });

    return (
        <div id="param-container">{exploreParams}</div>
    );
};

export default ExploreParams;