import { useContext } from 'react';
import { DataContext } from '../App';

// Importing MUI components
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const BreadCrumbs = () => {
    // Importing context
    const dataContext = useContext(DataContext);
    const currLocation = dataContext.museum.currLocation // Current location of user within website
    const selectedArtwork = dataContext.museum.selectedArtwork; // Selected artwork info

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
      
    const location = capitalizeFirstLetter(currLocation);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link href={`/${currLocation}`}>{location}</Link>
            <Typography>{selectedArtwork.title}</Typography>
        </Breadcrumbs>
    );
};

export default BreadCrumbs;