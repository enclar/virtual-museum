import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";

const ExploreByDepartment = () => {
    const dataContext = useContext(DataContext);

    // Loading available departments during intial load using useEffect
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.departments.getList&access_token=6fd9a7b92c658538ecd48ededad922c9&page=1&per_page=100"

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
    });

    // Mapping available departments
    const depts = dataContext.museum.exploreDepts.map((ele, index) => {
        return (
            <div
                className="depts"
                onClick={() => getResultByDept(ele.id)}
                key={index}
            >{ele.name}</div>
        );
    });

    // Choosing a department and searching for corresponding artworks
    const getResultByDept = async (dept) => {
        const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=6fd9a7b92c658538ecd48ededad922c9&department_id=${dept}&page=1&per_page=20`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            // setArt(data.objects);
            dataContext.dispatch({type: "FILTER_ART_BY_DEPT", value: data.objects})
            // console.log(data.objects);
        }

        catch (error) {
            console.log(error)
        };
    };

    // Mapping images pulled from each department
    const artwork = dataContext.museum.filterByDept.map((ele) => {
        return (
            <Link className="artwork" to={`/details/${ele.id}`}>
                <img
                    className="artwork"
                    src={ele.images[0].sq.url}
                />
            </Link>
        )
    })

    return (
        <div id="by-depts">
            <h1>EXPLORE BY DEPARTMENT</h1>
            <div id="dept-container">
                {depts}
            </div>
            <h3 id="img-descript">click thumbnail to view detailed artwork and description</h3>
            <div id="img-container">
                {artwork}
            </div>
        </div>
    );
};

export default ExploreByDepartment;