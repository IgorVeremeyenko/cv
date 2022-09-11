import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import levels from './levelsUkr';
  
function valuetext(value) {
    return `${value}°C`;
}

const Ukrainian = () => {

    return (
        <Box sx={{ width: '90%', minWidth: 500 }}>
            <Slider
                aria-label="Language levels"
                defaultValue={100}
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                marks={levels}
                disabled
            />
        </Box>
    )
}

export default Ukrainian;