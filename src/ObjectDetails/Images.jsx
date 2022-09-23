import { useContext } from "react";
import { DataContext } from "../App";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const Images = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const images = dataContext.museum.selectedArtwork.images; // Image data of selected artwork
    const width = images[0].z.width;
    const height = images[0].z.height;

    const carouselImages = images.map((ele, index) => {
        return (
            <SplideSlide key={index}>
                <img id="img"
                    src={ele.z.url}
                    style={{minWidth: width, maxHeight: height}}
                />
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