import { useContext, useRef } from "react";
import { DataContext } from "../../App";

import "./Filters.css";

const Filters = () => {
    // Import context and defining variables
    const dataContext = useContext(DataContext);
    const filterOptions = dataContext.museum.filterOptions; // Filter info
    const pagination = dataContext.museum.pagination; // Pagination info

    // Setting up useRef to read input values
    const inputRefColor = useRef();
    const inputRefDept = useRef();
    const inputRefPeriod = useRef();
    const inputRefOnDisplay = useRef();
    const inputRefQuery = useRef();

    // Map out datalist options for different params
    const colors = filterOptions.swatches.map((ele, index) => {
        return (
            <option value={ele} key={index} />
        );
    });

    const depts = filterOptions.depts.map((ele) => {
        return (
            <option value={ele.id} key={ele.id}>{ele.name}</option>
        );
    });

    const periods = filterOptions.periods.map((ele) => {
        return (
            <option value={ele.name} key={ele.id} />
        )
    })

    // Function to fetch new set of results when filter is changed
    const handleSearch = () => {
        let currColor;
        if (inputRefColor.current.value == "#000000") {
            currColor == ""
        } else {
            currColor = inputRefColor.current.value
        }

        dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, currPage: "1"}}); // New search results will start from page 1

        dataContext.dispatch({ // Updating active filters
            type: "UPDATE_CURRENT_FILTERS",
            value: {
                color: currColor,
                dept: inputRefDept.current.value,
                period: inputRefPeriod.current.value,
                on_display: inputRefOnDisplay.current.value,
                query: inputRefQuery.current.value
            }
        });
    };

    // Function to clear all active filters and return to original state
    const handleClear = () => {
        inputRefColor.current.value = "#000000";
        inputRefDept.current.value = "";
        inputRefPeriod.current.value = "";
        inputRefOnDisplay.current.value = "";
        inputRefQuery.current.value = "";

        dataContext.dispatch({type: "UPDATE_CURRENT_FILTERS", value: {...filterOptions, on_display: "false"}});
        dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, currPage: "1"}});
    };

    return (
        <div id="filters">
            <div id="preset-filters">
                <input ref={inputRefColor} type="color" list="swatch-colors" />
                <datalist id="swatch-colors">
                    {colors}
                </datalist>

                <input ref={inputRefDept} list="depts" placeholder="Department" />
                <datalist id="depts">
                    {depts}
                </datalist>

                <input ref={inputRefPeriod} list="periods" placeholder="Period" />
                <datalist id="periods">
                    {periods}
                </datalist>

                <input ref={inputRefOnDisplay} list="on-display" placeholder="On Display?" />
                <datalist id="on-display">
                    <option value="true" />
                    <option value="false" />
                </datalist>
            </div>

            <input ref={inputRefQuery} id="query" placeholder="Search for Keywords" />

            <div id="buttons">
                <button id="clear-btn" onClick={handleClear}>CLEAR ALL</button>
                <button id="search-btn" onClick={handleSearch}>SEARCH</button>
            </div>
        </div>
    );
};

export default Filters;