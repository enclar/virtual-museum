import { useContext } from "react";
import { DataContext } from "../App";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

import "./Images.css";

const Images = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const images = dataContext.museum.selectedArtwork.images; // Image data of selected artwork
    const width = images[0].z.width;

    const carouselImages = images.map((ele, index) => {
        return (
            <SplideSlide key={index}>
                <img src={ele.z.url} />
            </SplideSlide>
        )
    })

    return (
        <div id="frame">
            <Splide options={{width: width}}>
                {carouselImages}
            </Splide>
        </div>
    );
};

export default Images;