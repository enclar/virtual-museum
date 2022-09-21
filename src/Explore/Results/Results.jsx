import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import urlcat from "urlcat";

import { DataContext } from "../../App";
import "./Results.css";

import Heart from "./Heart";

const Results = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const searchResults = dataContext.museum.searchResults; // Array of search results
    const currentFilters = dataContext.museum.currentFilters; // Current filter options
    const pagination = dataContext.museum.pagination; // Pagination info

    // Function to re-render results every time a new filter is added in
    const getArtwork = async () => {
        const url = urlcat("https://api.collection.cooperhewitt.org/rest/", {
            method: "cooperhewitt.search.objects",
            access_token: "4845918c6c961dd37cbb22942d5c2ec8",
            page: pagination.currPage,
            per_page: "30",
            color: currentFilters.color,
            department_id: currentFilters.dept,
            period: currentFilters.period,
            on_display: currentFilters.on_display,
            query: currentFilters.query
        });

        try {
            dataContext.dispatch({type: "LOADING", value: "loading"});
            const response = await fetch(url);
            const data = await response.json();

            dataContext.dispatch({type: "FILTER_ART", value: data.objects});
            dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, totalPages: data.pages}})

            dataContext.dispatch({type: "LOADING", value: "done"});
        }

        catch (error) {
            console.log(error);
        }
    };

    // Implementing useEffect to re-run the above function when any of the explore filters is changed
    useEffect(() => {
        getArtwork();
    }, [currentFilters, pagination.currPage]);

    // Mapping out the search results
    const artworks = searchResults.map((ele, index) => {
        return (
            <div className="artwork-div" key={index}>
                <Link to={`/explore/${ele.id}`}>
                    <img
                        className="artwork"
                        src={ele?.images[0]?.n?.url}
                        style={{minWidth: ele?.images[0]?.n?.width, minHeight: ele?.images[0]?.n?.height}}
                        onClick={() => {
                            dataContext.dispatch({type: "SWITCH_IMAGE", value: 0}) // Making sure the first image is shown when details page is opened
                            dataContext.dispatch({type: "VIEW_DETAILS", value: ele}) // Passing on the details of chosen artwork to be displayed
                        }}
                    />
                </Link>
                <Heart ele={ele} />
            </div>
        );
    });

    const getResults = () => {
        if (dataContext.museum.searchResults.length == 0) {
            return <h2 id="no-results">SORRY, NO RESULTS FOUND!</h2>
        } else {
            return (
                <div id="artwork-container">
                    <div id="artwork-results">{artworks}</div>
                </div>
            );
        };
    };

    const results = getResults();

    return (
        <React.Fragment>
            {dataContext.museum.status == "loading" ? <progress /> : results}
        </React.Fragment>
    );
};

export default Results;