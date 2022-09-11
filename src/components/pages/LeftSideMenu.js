import { ImageProfile } from "../ImageProfile";
import { MyDivider } from "../MyDivider";
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useState } from 'react';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export const LeftSideMenu = () => {
    // const [isHover, setIsHover] = useState(0);
    // const [bcgrnd, setBcgrnd] = useState('#FFFAF0');
    
    //  const handleMouseEnter = () => {
    //     setIsHover(15);
    //     setBcgrnd('white');
    //  };
    //  const handleMouseLeave = () => {
    //     setBcgrnd('#FFFAF0');
    //     setIsHover(0);
    //  };
    // const Item = styled(Paper)(({ theme }) => ({
    //     ...theme.typography.body2,
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     height: 60,
    //     lineHeight: '60px',
    //   }));
    //   const strings = ['ABOUT ME', 'RESUME', 'PORTFOLIO', 'CONTACT']
    return (
        <div className="container">
            <div className="photo" style={styles.photo}>
                <ImageProfile />
            </div>
            
        </div>
    )
}

const styles = {
    photo: {
        width: '300px',
        height: '300px',
    },
    menu: {
        width: '300px',
        listStyle: 'none',
        textTransform: 'uppercase',
        fontWeight: 'bold',   
        display: 'flex',
        flexDirection: 'column',
        rowGap: '30px',
        alignItems: 'center',
        padding: 0,
        paddingTop: 40
    }
}

