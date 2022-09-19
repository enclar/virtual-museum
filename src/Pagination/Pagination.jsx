import { useContext } from "react";
import { DataContext } from "../App";

import "./Pagination.css";

const Pagination = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const pagination = dataContext.museum.pagination; // Pagination info
    const currPage = pagination.currPage; // Current Page

    // Function to move to the next page
    const handleNext = () => {
        console.log("next page");
        if (parseInt(currPage) < parseInt(pagination.totalPages)) { // Checking that user is currently not on last page of results
            const newPage = (parseInt(currPage) + 1).toString(); // Converting to integer to add one, then converting back to string
            dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, currPage: newPage}}); // Updating the state
        } else {
            alert("No more results to display") // Produce error if user is on last page
        }
    };

    // Function to move to previous page
    const handlePrev = () => {
        console.log("previous page");
        if (parseInt(currPage) > 1) { // Checking that user is currently not on the first page
            const newPage = (parseInt(currPage) - 1).toString(); // Converting to integer to minus 1, then converting back to string
            dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, currPage: newPage}}); // Updating the state
        } else {
            alert("First page of results") // If user is on the first page of results, produce error
        }
    };


    return (
        <div id="pagination">
            <button onClick={handlePrev}>PREV</button>
            <button onClick={handleNext}>NEXT</button>
        </div>
    );
};

export default Pagination;