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
                // Fetching all the available departments
                const response = await fetch(url);
                const data = await response.json();

                dataContext.dispatch({type: "FETCH_DEPTS", value: data.departments})
            
                // Fetching the search results from the first available department
                dataContext.dispatch({type: "LOADING", value: "loading"})
                const responseOne = await fetch ("https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=4845918c6c961dd37cbb22942d5c2ec8&department_id=35347493&page=1&per_page=30");
                const dataOne = await responseOne.json();
                dataContext.dispatch({type: "LOADING", value: "done"});
                dataContext.dispatch({type: "FILTER_ART", value: dataOne.objects});
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
            <h1>EXPLORE BY DEPARTMENT</h1>
            <div id="dept-container">
                {depts}
            </div>
        </div>
    );
};

export default ExploreByDepartment;