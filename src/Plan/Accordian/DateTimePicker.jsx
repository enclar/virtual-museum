import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const DateTimePicker = () => {
    return (
        <div id="time-filters">
            <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2022-09-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="time"
                label="Timeslot"
                type="time"
                defaultValue="10:00"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                step: 300, // 5 min
                }}
                sx={{ width: 150 }}
            />
        </div>
    );
};

export default DateTimePicker;