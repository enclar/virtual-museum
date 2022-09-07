import { useEffect, useState } from "react";
import "./ExploreByColor.css";

const ExploreByColor = () => {
    const [colors, setColor] = useState([]);
    const [status, setStatus] = useState("loading");
    const [art, setArt] = useState([]);

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

    const getResultByColor = async (color) => {
        const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=4845918c6c961dd37cbb22942d5c2ec8&color=" + color.substr(1) + "&page=1&per_page=20";

        try {
            const response = await fetch(url);
            const data = await response.json();
            setArt(data.objects);
            console.log(data.objects);
        }

        catch (error) {
            console.log(error)
        };
    };

    const swatches = colors.map((ele, index) => {
        return (
            <div
                className="swatches"
                style={{backgroundColor: ele}}
                onClick={() => getResultByColor(ele)}
                key={index}
            ></div>
        );
    });

    const artwork = art.map((ele, index) => {
        return (
            <img
                className="artwork"
                src={ele.images[0].sq.url}
                key={index}
            />
        );
    });

    return (
        <div id="by-color">
            <h1>EXPLORE BY COLOR</h1>
            <div id="swatch-container">
                {swatches}
            </div>
            <h3 id="img-descript">click thumbnail to view detailed artwork and description</h3>
            <div id="img-container">
                {artwork}
            </div>
        </div>
    );
};

export default ExploreByColor;