//! Maps out the different departments the museum is categorized into

import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../App";
import "./ExploreByDepartment.css"

import Results from "../ResultsArchive/ResultsArchive";

const ExploreByDepartment = () => {
    // Importing data context
    const dataContext = useContext(DataContext);
    console.log("dataContext:", dataContext);

    // Loading available departments during intial load using useEffect
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.departments.getList&access_token=4845918c6c961dd37cbb22942d5c2ec8&page=1&per_page=100"

            try {
                // Fetching all the available departments
                const response = await fetch(url);
                const data = await response.json();

                dataContext.dispatch({type: "FETCH_DEPTS", value: data.departments})
            }

            catch (error) {
                console.log(error);
            };
        };

        fetchData();
    }, []);

    // Mapping available departments
    const depts = dataContext.museum.availDepts.map((ele, index) => {
        return (
            <div
                className="dept"
                onClick={() => getResultByDept(ele.id)}
                key={index}
            >{ele.name}</div>
        );
    });

    // Choosing a department and searching for corresponding artworks
    const getResultByDept = async (dept) => {
        const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=4845918c6c961dd37cbb22942d5c2ec8&department_id=${dept}&page=1&per_page=20`;

        try {
            dataContext.dispatch({type: "LOADING", value: "loading"})
            const response = await fetch(url);
            const data = await response.json();
            dataContext.dispatch({type: "LOADING", value: "done"});
            dataContext.dispatch({type: "FILTER_ART", value: data.objects});
        }

        catch (error) {
            console.log(error)
        };
    };


    return (
        <div id="by-dept">
            {depts}
        </div>
    );
};

export default ExploreByDepartment;