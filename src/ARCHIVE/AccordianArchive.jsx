import { useState } from 'react';
import urlcat from 'urlcat';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ControlledAccordions = () => {
  // Defining states
  const [expanded, setExpanded] = useState(false);

  const openingHours = [
    {day: "Sunday", gallery: "10:00 - 18:00", cafe: "07:30 - 18:00"},
    {day: "Monday", gallery: "10:00 - 18:00", cafe: "07:30 - 18:00"},
    {day: "Tuesday", gallery: "10:00 - 18:00", cafe: "07:30 - 18:00"},
    {day: "Wednesday", gallery: "10:00 - 18:00", cafe: "07:30 - 18:00"},
    {day: "Thursday", gallery: "10:00 - 18:00", cafe: "07:30 - 18:00"},
    {day: "Friday", gallery: "10:00 - 18:00", cafe: "07:30 - 18:00"},
    {day: "Saturday", gallery: "10:00 - 21:00", cafe: "08:00 - 21:00"}
  ];

  // Function to handle change
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="accordians">
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
              <th style={{backgroundColor: "white"}}></th>
              <th>GALLERIES</th>
              <th>CAFE</th>
            </tr>
            {openingHours.map((ele) => {
              return (
                <tr>
                  <td className="day">{ele.day}</td>
                  <td className="time">{ele.gallery}</td>
                  <td className="time">{ele.cafe}</td>
                </tr>
              )
            })}
          </table>
          <p id="cafe-description">The museum cafe is located on the ground floor. Operated by Italian restaurant and caterer Tarallucci e Vino, the cafe offers a seasonal menu featuring Italian pastries, espresso, salads, soups, and panini, as well as a large selection of wines by the glass.</p>
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