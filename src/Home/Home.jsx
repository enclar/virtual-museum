import "./Home.css";

import museum_half from "../../src/images/museum-half.png"

const Home = () => {
    return (
        <div id="home">
            <div id="home-content">
                <p id="home-welcome">WELCOME TO THE</p>
                <p id="home-title">COOPER HEWITT</p>
                <p id="home-subtitle">SMITHSONIAN DESIGN MUSEUM</p>

                <p id="home-descr">
                    Cooper Hewitt is the nation’s only museum dedicated to historic and contemporary design, with a collection of over 210,000 design objects spanning thirty centuries. Located in the landmark Andrew Carnegie mansion and boasting a beautiful public garden, Cooper Hewitt makes design come alive with unique temporary exhibitions and installations of the permanent collection.
                </p>
            </div>

            <div id="home-img">
                <img src={museum_half} className="museum-img" id="museum-half-left" />
                <img src={museum_half} className="museum-img" id="museum-half-right" />
            </div>
        </div>
    );
};

export default Home