import * as React from 'react';
import { useMemo,useState,useContext,createContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider,createTheme,useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../../counterSlice';
import { ReactComponent as Light } from '../../assets/img/light.svg';
import { ReactComponent as Dark } from '../../assets/img/dark.svg';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function MyButton() {
    let value = useSelector((state) => state.counter.theme);
    const dispatcher = useDispatch();
    const setDarkTheme = () => {
        dispatcher(switchTheme('dark'))
    }
    const setLightTheme = () => {
        dispatcher(switchTheme('light'))
    }
    const [alignment,setAlignment] = useState(value);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
        colorMode.toggleColorMode(newAlignment);
        switch(newAlignment){
            case 'light': setLightTheme();
            break;
            case 'dark' : setDarkTheme();
        }
    };
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
                justifyContent: 'space-evenly;'
            }}
        >
            <span></span>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="light" >
                    <Light height={35} width={35} fill='currentColor'/>
                </ToggleButton>
                <ToggleButton value="dark" >
                    <Dark height={35} width={35} fill='currentColor'/>
                </ToggleButton>
            </ToggleButtonGroup>
            {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton> */}
        </Box>
    );
}