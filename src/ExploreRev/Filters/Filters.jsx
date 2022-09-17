import React, { useContext, useRef, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { useSearchParams } from "react-router-dom";
import urlcat from "urlcat";
import { DataContext } from "../../App";

import "./Filters.css";
import params from "../../Explore/exploreParams";

const Filters = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const filterOptions = dataContext.museum.filterOptions; // Object containing arrays of the options for each category (color/dept/period)

    // Setting up input ref
    const inputRefPeriod = useRef();
    const inputRefColor = useRef();

    // Setting up Search Params
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log("searchParams:", searchParams);

    const color = searchParams.get("color");
    const period = searchParams.get("period");
    const department = searchParams.get("department");
    const on_display = searchParams.get("on_display") || false;

    // Function to fetch filtered artworks every time new filter is implemented
    const getArtworks = async () => {
        const url = urlcat("https://api.collection.cooperhewitt.org/rest/", {
            method: "cooperhewitt.search.objects",
            access_token: "4845918c6c961dd37cbb22942d5c2ec8",
            page: "1",
            per_page: "30",
            color,
            period,
            department,
            on_display,
        });

        try {
            dataContext.dispatch({type: "LOADING", value: "loading"});
            const response = await fetch(url);
            const data = await response.json();
            // console.log("Filtered Data:", data);
            console.log("URL:", url);
            dataContext.dispatch({type: "FILTER_ART", value: data.objects});
            dataContext.dispatch({type: "LOADING", value: "done"});
        }

        catch (error) {
            console.log(error);
        }
    };

    // useEffect to run every time the search params change
    useEffect(() => {
        console.log("useEffect has run")
        if (searchParams != {}) {
            getArtworks();
        }
    }, [color, period, department]);

    // Function to update filters when submit button is clicked
    const handleSubmit = () => {
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

export default Filters;