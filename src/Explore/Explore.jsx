import { Link } from "react-router-dom";
import "./Explore.css";

const Explore = () => {
    return (
        <div id="explore">
            <div id="explore-title">
                <h1>EXPLORE</h1>
                <h3>explore what the museum has to offer at your own pace</h3>
            </div>
            <div id="explore-container">
                <Link className="explore-cat" to="/explore/color">COLOR</Link>
                <Link className="explore-cat" to="/explore/collection">COLLECTION</Link>
            </div>
        </div>
    );
};

export default Explore;