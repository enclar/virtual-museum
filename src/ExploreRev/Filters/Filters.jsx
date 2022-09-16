import React, { useContext } from "react";
import { Listbox } from "@headlessui/react";
import { DataContext } from "../../App";

import "./Filters.css";

const DeptFilter = () => {
    const dataContext = useContext(DataContext);
    const filterOptions = dataContext.museum.filterOptions;

    const colors = filterOptions.swatches.map((ele, index) => {
        return (
            <option value={ele} key={index}></option>
        )
    });

    const depts = filterOptions.depts.map((ele) => {
        return (
            <option value={ele.name} key={ele.id}/>
        )
    });

    return (
        <div id="filters">

            <input type="color" list="swatch-colors" />
            <datalist id="swatch-colors">
                {colors}
            </datalist>

            <input list="depts" />
            <datalist id="depts">
                {depts}
            </datalist>
        
        </div>
    );
};

export default DeptFilter;