import "./Home.css";

import background_img from "../../src/images/home-background.png"

const Home = () => {
    return (
        <div id="home">
            <div id="welcome">
                <div className="circle"></div>
                <div id="wt">welcome to</div>
                <div className="circle"></div>
            </div>
            <h1 id="ch">
                C<span>OO</span>P<span>E</span>R
                H<span>E</span>W<span>I</span>TT
            </h1>
            <div id="online">online</div>
            <div id="home-img">
                <p>Cooper Hewitt is the nation’s only museum dedicated to historic and contemporary design, with a collection of over 210,000 design objects spanning thirty centuries. Located in the landmark Andrew Carnegie mansion and boasting a beautiful public garden, Cooper Hewitt makes design come alive with unique temporary exhibitions and installations of the permanent collection.</p>
                <img src={background_img} />
            </div>
        </div>
    );
};

export default Home