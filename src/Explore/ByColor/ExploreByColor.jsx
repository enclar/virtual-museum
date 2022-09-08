import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import "./ExploreByColor.css";

import Results from "../Results/Results";

const ExploreByColor = () => {

    const dataContext = useContext(DataContext);
    console.log("dataContext:", dataContext);

    // Loading available color swatches during initial load using useEffect
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
            dataContext.dispatch({type: "FILTER_ART_BY_COLOR", value: data.objects});
            dataContext.dispatch({type: "SEARCH_RESULTS", value: data.objects});
            // console.log(data.objects);
        }

        catch (error) {
            console.log(error)
        };
    };

    return (
        <div id="by-color">
            <h1>EXPLORE BY COLOR</h1>
            <div id="swatch-container">
                {swatches}
            </div>
            <Results />
        </div>
    );
};

export default ExploreByColor;