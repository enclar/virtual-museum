//! Component to display the details of a selected object - can be accessed from explore or favs

import { useContext, useEffect } from "react";
import { DataContext } from "../App";
import "./ObjectDetails.css";

// Importing components
import BreadCrumbs from "./BreadCrumbs";
import Images from "./Images";
import Description from "./Description";
import Details from "./Details";
import Participants from "./Participants";

const ObjectDetails = () => {
    // Importing the context
    const dataContext = useContext(DataContext);
    const artwork = dataContext.museum.selectedArtwork;

    // Getting the main colors of the artwork
    useEffect(() => {
        const getColors = async (id) => {
            const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getColors&access_token=4845918c6c961dd37cbb22942d5c2ec8&id=${id}`
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                dataContext.dispatch({type: "GET_ARTWORK_SWATCHES", value: data.colors})
            }
            
            catch (error) {
                console.log(error)
            };
        };

        getColors(artwork.id);
    }, []);

    return (
        <div id="obj-details">
            <BreadCrumbs />

            <h1 id="title">
                {artwork.title_raw == "" || artwork.title_raw == null ? artwork.title : artwork.title_raw }
            </h1>

            <Images />
            
            <div id="artwork-info">
                <Description />
                <Details />
                <Participants />
            </div>
        </div>
    );
};

export default ObjectDetails;