import { useState, useEffect } from 'react';
import urlcat from 'urlcat';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Accordian.css";

const ControlledAccordions = () => {
  // Defining states
  const [expanded, setExpanded] = useState(false);

  const galleryHours = [
    {Sunday: "10:00 - 18:00"},
    {Monday: "10:00 - 18:00"},
    {Tuesday: "10:00 - 18:00"},
    {Wednesday: "10:00 - 18:00"},
    {Thursday: "10:00 - 18:00"},
    {Friday: "10:00 - 18:00"},
    {Saturday: "10:00 - 21:00"},
  ];

  const cafeHours = [
    {Sunday: "07:30 - 18:00"},
    {Monday: "07:30 - 18:00"},
    {Tuesday: "07:30 - 18:00"},
    {Wednesday: "07:30 - 18:00"},
    {Thursday: "07:30 - 18:00"},
    {Friday: "07:30 - 18:00"},
    {Saturday: "08:00 - 21:00"},
  ];

  // Function to handle change
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="accordian">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: "ch-semibold", color: "var(--olive-green)"}}>
            Opening Hours
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", gap: "50px", justifyContent: "center" }}>
          <table>
            <tr>
              <th colSpan={2}>GALLERIES</th>
            </tr>
            {galleryHours.map((ele, index) => {
              return (
                <tr>
                  <td>{Object.keys(ele)}</td>
                  <td>{Object.values(ele)}</td>
                </tr>
              )
            })}
          </table>

          <table>
          <tr>
            <th colSpan={2}>CAFE</th>
          </tr>
          {cafeHours.map((ele, index) => {
            return (
              <tr>
                <td>{Object.keys(ele)}</td>
                <td>{Object.values(ele)}</td>
              </tr>
            )
          })}
        </table>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ flexShrink: 0, fontFamily: "ch-semibold", color: "var(--olive-green)" }}>
            Getting Here
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ flexShrink: 0, fontFamily: "ch-semibold", color: "var(--olive-green)" }}>Book Your Tickets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
        <Typography sx={{ flexShrink: 0, fontFamily: "ch-semibold", color: "var(--olive-green)" }}>
          Contact Us
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ControlledAccordions;