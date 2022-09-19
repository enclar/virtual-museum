import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../App";

const DetailButtons = () => {
    // Importing context
    const dataContext = useContext(DataContext);

    return (
        <div id="detail-buttons">
            <button
                    id="like-btn"
                    onClick={() => dataContext.dispatch({type: "ADD_TO_FAVS", value: artwork})}
            >LIKE</button>
            <Link id="back-btn" to="/explore">BACK</Link>
        </div>
    );
};

export default DetailButtons;