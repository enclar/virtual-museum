import { useContext, useEffect } from "react";
import { DataContext } from "../../App";

import ExploreByColor from "../ByColor/ExploreByColor";
import ExploreByDepartment from "../ByDepartment/ExploreByDepartment";

const ParamOptions = () => {
    // Setting up the context
    const dataContext = useContext(DataContext);

    // Defining the currSearchParam
    const currParam = dataContext.museum.currExploreParam;

    // Function to check which param option should be returned
    const getParamOptions = (param) => {
        if (param != null) {
            if (param == "color") {
                return <ExploreByColor />
            } else if (param == "dept") {
                return <ExploreByDepartment />
            };
        };
    };

    const currParamOptions = getParamOptions(currParam);

    return (
        <div id="param-options">
            {currParamOptions}
        </div>
    );
};

export default ParamOptions;