import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const OpeningHours = () => {
  return (
    <>
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
        </>
    );
};

export default OpeningHours;