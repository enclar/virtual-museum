//! Component to display the participants involved in the artwork

import { useContext, useEffect } from "react";
import { DataContext } from "../App";

const Participants = () => {
    // Importing the context
    const dataContext = useContext(DataContext);
    const artwork = dataContext.museum.selectedArtwork;

    // Mapping out the participants
    const participants = artwork.participants.map((ele, index) => {
        return (
            <h3 key={index}>{ele.role_display_name} {ele.person_name}</h3>
        );
    });

    return (
        <div id="obj-participants" className="info-category">
            <h2>PARTICIPANTS</h2>
            <h3>{artwork.participants.length == 0 ? <span className="not-avail">Participants not available</span> : participants}</h3>
        </div>
    );
};

export default Participants;