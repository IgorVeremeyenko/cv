import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import levels from './levelsRus';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setWidth} from '../../counterSlice'

function valuetext(value) {
    return `${value}°C`;
}

const Russian = () => {
    let value = useSelector((state) => state.counter.width);
    const dispatcher = useDispatch();
    const tr =() => {
        dispatcher(setWidth(true));
    }
    const fl =() => {
        dispatcher(setWidth(false));
    }
    useEffect(() => {
        window.innerWidth <= 1200 ? tr() : fl();
        window.addEventListener("resize", (event) => {
            const size = event.target.window.innerWidth;
            if(size <= 1200){
                tr()
            }
            if(size > 1200){
                fl();
            }
        })
    },[])
    return (
        <Box sx={{ width: '100%'}}>
            {!value ? <Slider
                aria-label="Language levels"
                defaultValue={100}
                getAriaValueText={valuetext}
                step={50}
                valueLabelDisplay="auto"
                marks={levels}
                disabled
            /> : 'Компетентное владение языком'}
        </Box>
    )
}

export default Russian;