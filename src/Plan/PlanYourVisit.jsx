import { useEffect } from "react";
import "./PlanYourVisit.css";

import ControlledAccordions from "./Accordian";

const PlanYourVisit = () => {

    return (
        <div id="plan">
            <h1>PLAN YOUR VISIT</h1>
            <div id="map">SPLIDE</div>
            <ControlledAccordions />      
        </div>
    );
};

export default PlanYourVisit;