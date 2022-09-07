import { useContext } from "react";
import { DataContext } from "../../App";

const ObjectDetails = () => {
    const dataContext = useContext(DataContext);
    console.log("Selected Art:", dataContext.museum.selectedArtwork);

    return (
        <div id="obj-details">
            <h1>These are the object details</h1>
        </div>
    );
};

export default ObjectDetails;