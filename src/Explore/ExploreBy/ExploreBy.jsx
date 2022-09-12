import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import "./ExploreBy.css"

import params from "../exploreParams";

import ExploreByColor from "../ByColor/ExploreByColor";
import ExploreByDepartment from "../ByDepartment/ExploreByDepartment";
import ExploreByVideo from "../ByVideo/ExploreByVideo"
import Results from "../Results/Results";

const ExploreBy = () => {
    const dataContext = useContext(DataContext);
    const searchParams = dataContext.museum.currExploreParam;

    // Mapping the available search params at the top of the page
    //! To be replaced with breadcrumbs if time permits (Week 13)
    const exploreParams = params.map((ele, index) => {
        return (
            <Link
                className="explore-cat"
                to={`/explore/${ele.link}`}
                onClick={() => dataContext.dispatch({type: "EXPLORE_BY", value: ele.link})} //* Setting the chosen explore param when clicked
                key={index}
            >{ele.name}</Link>
        );
    });

    // Function to check what is the requested Explore Param (color/dept/video etc.) and return the corresponding component
    const getExploreParam = (param) => {
        if (param === "color") {
            return <ExploreByColor />
        } else if (param == "dept") {
            return <ExploreByDepartment />
        } else if (param == "video") {
            return <ExploreByVideo />
        }
    };

    // Calling the getExploreParam function to assign it to a variable
    const chosenExploreParam = getExploreParam(searchParams);

    return (
        <div id="explore-by">
            <div id="params">{exploreParams}</div>
            {chosenExploreParam}
        </div>
    );
};

export default ExploreBy;