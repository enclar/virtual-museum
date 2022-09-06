import { useEffect, useState } from "react";
import "./ExploreByColor.css";

const ExploreByColor = () => {
    const [colors, setColor] = useState([]);

    useEffect(() => {
        const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.colors.palettes.getInfo&access_token=4845918c6c961dd37cbb22942d5c2ec8&palette=crayola";
    
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setColor(Object.keys(data.colors));
          })

          .catch((error) => {
            console.log(error);
          });
    }, []);

    const swatches = colors.map((ele, index) => {
        return (
            <div
                className="swatches"
                style={{backgroundColor: ele}}
                key={index}
            ></div>
        );
    });

    return (
        <div id="by-color">
            <h1>EXPLORE BY COLOR</h1>
            <div id="swatch-container">
                {swatches}
            </div>
        </div>
    );
};

export default ExploreByColor;