import { useEffect } from "react";
import "./PlanYourVisit.css";

import ControlledAccordions from "../ARCHIVE/AccordianArchive";
import Accordions from "./Accordian/Accordian";
import plan_left from "../../src/images/plan-left-bg.png";
import plan_right from "../../src/images/plan-right-bg.png";

const PlanYourVisit = () => {

    return (
        <div id="plan">
            <img src={plan_left} id="plan-bottom-left" />
            <div id="plan-middle">
                <h1 id="pyv">PLAN YOUR VISIT</h1>
                <Accordions />
                <h2 id="end-msg">we hope to see you soon!</h2>
            </div>
            <img src={plan_right} id="plan-bottom-right"/>
        </div>
    );
};

export default PlanYourVisit;