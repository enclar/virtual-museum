import React, { useContext, useRef } from "react";
import { Listbox } from "@headlessui/react";
import { useSearchParams } from "react-router-dom";
import { DataContext } from "../../App";

import "./Filters.css";

const DeptFilter = () => {

    const inputRefPeriod = useRef();
    const inputRefColor = useRef();

    // Setting up Search Params
    const [searchParams, setSearchParams] = useSearchParams()

    const color = searchParams.get("color");
    const period = searchParams.get("period");
    const department = searchParams.get("department");

    // Importing context
    const dataContext = useContext(DataContext);
    const filterOptions = dataContext.museum.filterOptions;

    const handleSubmit = () => {
        // const value = document.querySelector("#period").value;
        console.log("Period:", inputRefPeriod.current.value);
        console.log("Color:", inputRefColor.current.value);

        const period = inputRefPeriod.current.value;
        const color = inputRefColor.current.value;

        setSearchParams({ color, period });
    };

    // Mapping out filter options for color swatches, departments and periods
    const colors = filterOptions.swatches.map((ele, index) => {
        return (
            <option value={ele} key={index}></option>
        )
    });

    // const depts = filterOptions.depts.map((ele) => {
    //     return (
    //         <option value={ele.name} key={ele.id}/>
    //     )
    // });

    const periods = filterOptions.periods.map((ele) => {
        return (
            <option value={ele.name} key={ele.id} />
        )
    });

    // Onclick handler function for when person updates any field
    // const addFilter = (period) => {

    //     const url = urlcat("https://api.collection.cooperhewitt.org/rest/", {
    //         method: "cooperhewitt.search.objects",
    //         access_token: "4845918c6c961dd37cbb22942d5c2ec8",
    //         period,
    //         page,
    //         per_page: "100"
    //     });
    // };

    return (
        <div id="filters">
            <div id="preset">
                <input ref={inputRefColor} type="color" list="swatch-colors" />
                <datalist id="swatch-colors">
                    {colors}
                </datalist>

                {/*
                <input list="depts" placeholder="Department" />
                <datalist id="depts">
                    {depts}
                </datalist>
                */}

                <input ref={inputRefPeriod} list="periods" placeholder="Period" />
                <datalist id="periods">
                    {periods}
                </datalist>
            </div>
            
            {/*<input id="search" type="search" placeholder="Search" />*/}

            <div id="buttons">
                <button id="clear-btn">Clear All</button>
                <button 
                    id="submit-btn"
                    onClick={handleSubmit}
                >Submit</button>
            </div>

        </div>
    );
};

export default DeptFilter;