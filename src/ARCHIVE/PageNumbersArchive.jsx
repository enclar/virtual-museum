import { useContext } from "react";
import { DataContext } from "../App";

import { Pagination } from "@mui/material";

const PageNumbers = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const pagination = dataContext.museum.pagination; // Page information

    // Function to handle change
    const handleChange = (event, value) => {
        dataContext.dispatch({type: "UPDATE_PAGINATION", value: {...pagination, currPage: value.toString()}})
    };

    return (
        <Pagination
            count={pagination.totalPages}
            page={pagination.currPage}
            onChange={handleChange}
            showFirstButton
            showLastButton
        />
    )
};

export default PageNumbers;