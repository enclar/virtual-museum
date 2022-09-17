import { useContext, useRef } from "react";
import { DataContext } from "../../App";

import "./Filters.css";

const Filters = () => {
    // Import context and defining variables
    const dataContext = useContext(DataContext);
    const filterOptions = dataContext.museum.filterOptions;

    // Setting up useRef
    const inputRefColor = useRef();
    const inputRefDept = useRef();
    const inputRefPeriod = useRef();
    const inputRefOnDisplay = useRef();

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

    // onClick function to update state
    const handleSearch = () => {
        let currColor;
        if (inputRefColor.current.value == "#000000") {
            currColor == ""
        } else {
            currColor = inputRefColor.current.value
        }

        dataContext.dispatch({
            type: "UPDATE_CURRENT_FILTERS",
            value: {
                color: currColor,
                dept: inputRefDept.current.value,
                period: inputRefPeriod.current.value,
                on_display: inputRefOnDisplay.current.value
            }
        })
    }

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

            <div id="buttons">
                <button id="search-btn" onClick={handleSearch}>SEARCH</button>
            </div>
        </div>
    );
};

export default Filters;