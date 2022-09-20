import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../App';

const BreadCrumbs = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const currLocation = dataContext.museum.currLocation // Current location of user within website
    const selectedArtwork = dataContext.museum.selectedArtwork; // Selected artwork info

    // Capitalize first letter
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
      
    const location = capitalizeFirstLetter(currLocation);

    // Move back to previous page
    const goBack = useNavigate();

    return (
        <div id="breadcrumbs">
            <span onClick={() => goBack(-1)}>{location}</span> / {selectedArtwork.title}
        </div>
    );
};

export default BreadCrumbs;