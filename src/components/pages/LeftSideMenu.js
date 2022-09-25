import { ImageProfile } from "../ImageProfile";
import { createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import {
    faFacebook,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyButton from "../buttons/MyButton";
import {useTheme} from "@mui/material/styles";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux';

export const LeftSideMenu = () => {
    const theme = useTheme();
    let value = useSelector((state) => state.counter.theme);
    const dispatcher = useDispatch();
    const [color1, setColor1] = useState(null);
    const [color2, setColor2] = useState(() => value === 'light' ? theme.palette.primary.main : theme.palette.primary);
    const [color3, setColor3] = useState(() => value === 'light' ? theme.palette.primary.main : theme.palette.primary);
    const changeColor1 = () => {
       setColor1(theme.palette.secondary.main);
    }
    const changeColor2 = () => {
        setColor2(theme.palette.secondary.main);
    }
    const changeColor3 = () => {
        setColor3(theme.palette.secondary.main);
    }
    /*no sense code up */
    const resetColor = () => {
        setColor1(theme.palette.primary.main);
        setColor2(theme.palette.primary.main);
        setColor3(theme.palette.primary.main);
    }

    useEffect(() => {
        setColor1(() => value === 'light' ? theme.palette.primary.main : theme.palette.primary.main)
        setColor2(() => value === 'light' ? theme.palette.primary.main : theme.palette.primary.main)
        setColor3(() => value === 'light' ? theme.palette.primary.main : theme.palette.primary.main)
    })
   
    return (
        <Box  className="container" sx={{bgcolor: 'background.default', color: 'text.primary'}}>
            <Box  className="photo" style={styles.photo}>
                <ImageProfile />
            </Box>
            <Box className="switchTheme" sx={{width: '50%'}}>
                 <MyButton/>
            </Box>
            <Box  className="social">
                <h3>Social Follow</h3>
                <Box  className="social-container">                
                    <a href="https://www.facebook.com/profile.php?id=100008083928382"
                        className="facebook social" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="iconAwesome1" color={color1} onMouseEnter={changeColor1} onMouseLeave={resetColor}/>
                        
                    </a>
                    <a href="https://www.instagram.com/igor_veremeyenko/"
                        className="instagram social" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="2x" color={color2} onMouseEnter={changeColor2} onMouseLeave={resetColor}/>
                        
                    </a>
                    <a href="https://www.linkedin.com/in/igorveremiienko"
                        className="linkedin social" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color={color3} onMouseEnter={changeColor3} onMouseLeave={resetColor}/>
                    </a>
                </Box>
            </Box>
        </Box>
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

