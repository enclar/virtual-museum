import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import urlcat from "urlcat";
import { DataContext } from "../App";

import "./Results.css";

const Results = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const searchResults = dataContext.museum.searchResults; // Array of search results
    const currentFilters = dataContext.museum.currentFilters; // Current filter options
    const currPage = dataContext.museum.currPage; // Pagination info

    const getArtwork = async () => {
        const url = urlcat("https://api.collection.cooperhewitt.org/rest/", {
            method: "cooperhewitt.search.objects",
            access_token: "4845918c6c961dd37cbb22942d5c2ec8",
            page: currPage,
            per_page: "30",
            color: currentFilters.color,
            department_id: currentFilters.dept,
            period: currentFilters.period,
            on_display: currentFilters.on_display,
        });

        try {
            console.log("URL:", url);

            dataContext.dispatch({type: "LOADING", value: "loading"});
            const response = await fetch(url);
            const data = await response.json();

            dataContext.dispatch({type: "FILTER_ART", value: data.objects});
            dataContext.dispatch({type: "UPDATE_TOTAL_PAGES", value: data.pages});
            dataContext.dispatch({type: "SWITCH_PAGE", value: "1"})

            dataContext.dispatch({type: "LOADING", value: "done"});
        }

        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArtwork();
    }, [currentFilters]);

    const artworks = searchResults.map((ele, index) => {
        return (
            <Link className="artwork" to={`/explore/${ele.id}`} key={index}>
                <img
                    className="artwork"
                    alt={ele?.title}
                    src={ele?.images[0]?.b?.url}
                    onClick={() => {
                        dataContext.dispatch({type: "SWITCH_IMAGE", value: 0})
                        dataContext.dispatch({type: "VIEW_DETAILS", value: ele})
                    }}
                />
            </Link>
        );
    });

    return (
        <div id="results">
            <h3>
                {dataContext.museum.searchResults != [] ? "click to view detailed artwork and description" : "no artwork available"}
            </h3>
            <div id="result-container">
                {dataContext.museum.status == "loading" ? <progress /> : <div id="img-container">{artworks}</div>}
            </div>
        </div>
    );
};

export default Results;