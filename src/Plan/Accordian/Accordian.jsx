import { useState } from 'react';
import "./Accordian.css"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

import DateTimePicker from './DateTimePicker';
import { Pinterest } from '@mui/icons-material';


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
          <div id="opening-hours">
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
        <AccordionDetails id="accordian-details">
          <div id="getting-here">
            <img id="map-img" src="https://maps.geoapify.com/v1/staticmap?style=klokantech-basic&width=600&height=400&center=lonlat:-73.957699,40.784284&zoom=14.8&marker=lonlat:-73.957699,40.784284;color:%23ff0000;size:medium&apiKey=29439b481b91468c8a6303292f6c2061"/>
            <p>
            Cooper Hewitt, Smithsonian Design Museum<br />
            2 East 91st St<br />
            New York, NY, 10128, USA</p>
          </div>
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
        <AccordionDetails id="accordian-details">
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
        <AccordionDetails id="accordian-details">
          <div id="social-media">
                <a href="https://www.facebook.com/cooperhewitt/" target="_blank" className="sm-icon">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/cooperhewitt/?hl=en" target="_blank" className="sm-icon">
                  <InstagramIcon />
                </a>
                <a href="https://twitter.com/cooperhewitt?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" className="sm-icon">
                  <TwitterIcon />
                </a>
                <a href="https://www.pinterest.com/cooperhewitt/" target="_blank" className="sm-icon" >
                  <Pinterest />
                </a>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordions;