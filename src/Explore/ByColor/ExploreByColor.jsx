import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import "./ExploreByColor.css";

const ExploreByColor = () => {

    const dataContext = useContext(DataContext);

    // Loading available color swatches during initial load using useEffect
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.colors.palettes.getInfo&access_token=4845918c6c961dd37cbb22942d5c2ec8&palette=crayola";
    
            try {
                // Fetching color swatch data
                const response = await fetch(url);
                const data = await response.json();
                dataContext.dispatch({type: "FETCH_SWATCHES", value: Object.keys(data.colors)});
            }

            catch (error) {
                dataContext.dispatch({type: "LOADING", value: "error"})
                console.log(error)
            }
        };

        fetchData();
    }, []);

    // Mapping available colors into swatches
    const swatches = dataContext.museum.availSwatches.map((ele, index) => {
        return (
            <div
                className="swatches"
                style={{backgroundColor: ele}}
                onClick={() => getResultByColor(ele)}
                key={index}
            ></div>
        );
    });

    // onClick function to search for artworks based on selected color
    const getResultByColor = async (color) => {
        const url = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=4845918c6c961dd37cbb22942d5c2ec8&color=" + color.substr(1) + "&page=1&per_page=30";

        try {
            dataContext.dispatch({type: "LOADING", value: "loading"})
            const response = await fetch(url);
            const data = await response.json();
            dataContext.dispatch({type: "LOADING", value: "done"});
            dataContext.dispatch({type: "FILTER_ART", value: data.objects});
        }

        catch (error) {
            console.log(error)
        };
    };

    return (
        <div id="by-color">
            <div id="swatch-container">
                {swatches}
            </div>
        </div>
    );
};

export default ExploreByColor;