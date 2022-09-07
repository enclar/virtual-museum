import { useState } from "react";
import "./Favs.css";

const Favs = () => {
    const [favs, setFavs] = useState([]);
    
    return (
        <div id="favs">
            <h1 id="favs-title">FAVOURITES</h1>
        </div>
    );
};

export default Favs;