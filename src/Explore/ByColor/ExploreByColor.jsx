import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import "./ExploreByColor.css";

const ExploreByColor = () => {

    const dataContext = useContext(DataContext);
    console.log("dataContext:", dataContext);

    // Loading available color swatches upon page loading using useEffect
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.colors.palettes.getInfo&access_token=4845918c6c961dd37cbb22942d5c2ec8&palette=crayola";
    
            try {
                const response = await fetch(url);
                const data = await response.json();
                dataContext.dispatch({type: "EXPLORE_BY_COLOR", value: Object.keys(data.colors)});
            }

            catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    // Mapping available colors into swatches
    const swatches = dataContext.museum.exploreColors.map((ele, index) => {
        return (
            <div
                className="swatches"
                style={{backgroundColor: ele}}
                onClick={() => getResultByColor(ele)}
                key={index}
            ></div>
        );
    });

    // Choosing a color and searching for corresponding artworks
    const getResultByColor = async (color) => {
        const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=4845918c6c961dd37cbb22942d5c2ec8&color=" + color.substr(1) + "&page=1&per_page=30";

        try {
            const response = await fetch(url);
            const data = await response.json();
            // setArt(data.objects);
            dataContext.dispatch({type: "FILTER_ART", value: data.objects})
            // console.log(data.objects);
        }

        catch (error) {
            console.log(error)
        };
    };

    // Mapping artworks which correspond to selected color into Links with images
    const artwork = dataContext.museum.filteredArt.map((ele, index) => {
        return (
            <Link className="artwork" to={`/explore/color/${ele.id}`}>
                <img
                    className="artwork"
                    src={ele.images[0].sq.url}
                    key={index}
                />
            </Link>
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