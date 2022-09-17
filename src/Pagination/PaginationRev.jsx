import { useContext, useEffect } from "react";
import urlcat from "urlcat";
import { DataContext } from "../App";

const PaginationRev = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const currPage = dataContext.museum.currPage; // Current page
    const totalPages = dataContext.museum.totalPages; // Total pages
    const currentFilters = dataContext.museum.currentFilters; // Current filter options

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

            dataContext.dispatch({type: "LOADING", value: "done"});
        }

        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArtwork();
    }, [currPage]);

    // Function to move to the next page
    const handleNext = () => {
        console.log("next page");
        if (parseInt(currPage) < parseInt(totalPages)) {
            const newPage = parseInt(currPage) + 1
            dataContext.dispatch({type: "SWITCH_PAGE", value: newPage.toString()});
        } else {
            alert("No more results to display")
        }
    };

    // Function to move to previous page
    const handlePrev = () => {
        console.log("previous page");
        if (parseInt(currPage) > 1) {
            const newPage = parseInt(currPage) - 1;
            dataContext.dispatch({type: "SWITCH_PAGE", value: newPage.toString()});
        } else {
            alert("First page of results")
        }
    };


    return (
        <div id="pagination">
            <button onClick={handlePrev}>PREV</button>
            <button onClick={handleNext}>NEXT</button>
        </div>
    );
};

export default PaginationRev;