import { ImageProfile } from "../ImageProfile";
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import {
    faFacebook,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LeftSideMenu = () => {
    const [color1, setColor1] = useState('#333333');
    const [color2, setColor2] = useState('#333333');
    const [color3, setColor3] = useState('#333333');
    const changeColor1 = () => {
       setColor1('blue');
    }
    const changeColor2 = () => {
        setColor2('blue');
    }
    const changeColor3 = () => {
        setColor3('blue');
    }
    const resetColor = () => {
        setColor1('#333333');
        setColor2('#333333');
        setColor3('#333333');
    }
   
    return (
        <div className="container">
            <div className="photo" style={styles.photo}>
                <ImageProfile />
            </div>
            <div className="social">
                <h3>Social Follow</h3>
                <div className="social-container">                
                    <a href="https://www.facebook.com/profile.php?id=100008083928382"
                        className="facebook social" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="2x" color={color1} onMouseEnter={changeColor1} onMouseLeave={resetColor}/>
                        
                    </a>
                    <a href="https://www.instagram.com/igor_veremeyenko/"
                        className="instagram social" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="2x" color={color2} onMouseEnter={changeColor2} onMouseLeave={resetColor}/>
                        
                    </a>
                    <a href="https://www.linkedin.com/in/igorveremiienko"
                        className="linkedin social" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color={color3} onMouseEnter={changeColor3} onMouseLeave={resetColor}/>
                    </a>
                </div>
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

