import { useEffect } from "react";
import "./PlanYourVisit.css";

import ControlledAccordions from "../ARCHIVE/AccordianArchive";
import Accordions from "./Accordian/Accordian";

const PlanYourVisit = () => {

    return (
        <div id="plan">
            <h1>PLAN YOUR VISIT</h1>
            <Accordions />
        </div>
    );
};

export default PlanYourVisit;