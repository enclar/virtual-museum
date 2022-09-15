import { useContext } from "react";
import { DataContext } from "../App";
import "./Pagination.css";

const Pagination = () => {
    const dataContext = useContext(DataContext);
    const pageInfo = dataContext.museum.pagination;

    const pages = pageInfo.total.map((ele, index) => {
        return (
            <h2 
                className="pagenum"
                onClick={() => dataContext.dispatch({type: "SWITCH_PAGE", value: {...pageInfo, current: ele}})}
                key={index}
            >{ele}</h2>
        );
    });

    return (
        <div id="pagination">{pages}</div>
    );
};

export default Pagination;