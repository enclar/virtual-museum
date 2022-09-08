import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import "./ExploreByDepartment.css"

import Results from "../Results/Results";

const ExploreByDepartment = () => {
    // Importing data context
    const dataContext = useContext(DataContext);
    console.log("dataContext:", dataContext);

    // Loading available departments during intial load using useEffect
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.departments.getList&access_token=4845918c6c961dd37cbb22942d5c2ec8&page=1&per_page=100"

            try {
                const response = await fetch(url);
                const data = await response.json();
                // console.log(data);
                // console.log("deptsArr:", deptsArr);
                dataContext.dispatch({type: "EXPLORE_BY_DEPT", value: data.departments})
            }

            catch (error) {
                console.log(error);
            };
        };

        fetchData();
    }, []);

    // Mapping available departments
    const depts = dataContext.museum.exploreDepts.map((ele, index) => {
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
            const response = await fetch(url);
            const data = await response.json();
            // setArt(data.objects);
            dataContext.dispatch({type: "FILTER_ART_BY_DEPT", value: data.objects});
            // console.log(data.objects);
        }

        catch (error) {
            console.log(error)
        };
    };


    return (
        <div id="by-dept">
            <h1>EXPLORE BY DEPARTMENT</h1>
            <div id="dept-container">
                {depts}
            </div>
            <Results />
        </div>
    );
};

export default ExploreByDepartment;