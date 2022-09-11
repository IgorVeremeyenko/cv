import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import levels from './levelsRus';
  
function valuetext(value) {
    return `${value}°C`;
}

const Russian = () => {

    return (
        <Box sx={{ width: '90%', minWidth: 500 }}>
            <Slider
                aria-label="Language levels"
                defaultValue={100}
                getAriaValueText={valuetext}
                step={50}
                valueLabelDisplay="auto"
                marks={levels}
                disabled
            />
        </Box>
    )
}

export default Russian;