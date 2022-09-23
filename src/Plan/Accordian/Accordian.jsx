import { useState, useEffect } from 'react';
import urlcat from 'urlcat';
import "./Accordian.css"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import DateTimePicker from './DateTimePicker';


const Accordions = () => {
  // Defining states
  const [expanded, setExpanded] = useState(false);

  // Function to handle change
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} id="accordian">
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        >
            <div id="accordian-header">OPENING HOURS</div>
        </AccordionSummary>

        <AccordionDetails id="accordian-details">
            <div className="hours">
                <h4>SUNDAY - FRIDAY</h4>
                <p className="timings">Galleries: 10:00 - 18:00</p>
                <p className="timings">Cafe: 07:30 - 18:00</p>
            </div>

            <div className="hours">
                <h4>SATURDAY</h4>
                <p className="timings">Galleries: 10:00 - 21:00</p>
                <p className="timings">Cafe: 08:00 - 21:00</p>
            </div>

            <p id="cafe-description">The museum cafe is located on the ground floor. Operated by Italian restaurant and caterer Tarallucci e Vino, the cafe offers a seasonal menu featuring Italian pastries, espresso, salads, soups, and panini, as well as a large selection of wines by the glass.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} id="accordian">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
            <div id="accordian-header">GETTING HERE</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} id="accordian">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
            <div id="accordian-header">BOOK NOW</div>
        </AccordionSummary>
        <AccordionDetails id="text-fields">
            <DateTimePicker />
            <TextField
                id="pax"
                label="Number of Pax"
                type="number"
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button
                variant="outlined"
                sx={{
                    fontFamily: "ch-semibold",
                    width: 150,
                    backgroundColor: "var(--midnight-blue)",
                    color: "var(--beige)",
                    paddingTop: "12px",
                    marginTop: "20px"
                }}
            >Book Tickets</Button>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} id="accordian">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
            <div id="accordian-header">GET IN TOUCH</div>
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

export default Accordions;