import { Link } from "react-router-dom";
import "./Explore.css";

const Explore = () => {
    return (
        <div id="explore">
            <div id="explore-title">
                <h1>EXPLORE</h1>
                <h3>explore our collection of digitized exhibits at your own leisure</h3>
            </div>
            <div id="explore-container">
                <Link className="explore-cat" to="/explore/color">COLOR</Link>
                <Link className="explore-cat" to="/explore/dept">DEPARTMENT</Link>
            </div>
        </div>
    );
};

export default Explore;