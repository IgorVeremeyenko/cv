import { Button } from "@mui/material"
import { ImageProfile } from "../ImageProfile"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export const StartPage = () => {

    let navigate = useNavigate();

    const goAbout = () => {
      navigate("/main/about");
    }

    return (
        <div style={styles.container}>
            <div className="text" style={{backgroundColor: 'white', flex: 2, padding: '50px'}}>
                <p style={styles.text}> HI THERE!</p>
                <p style={styles.textName}>I'M <span style={{ fontFamily: 'Alumni Sans Collegiate One, sans-serif', color: '#fdb82c', fontSize: '70px' }}>IGOR</span></p>
                <span style={{ fontSize: '24px', padding: '1px 10px', borderRadius: '5px', backgroundColor: '#fdb82c' }}>Software Engineer / System Administrator</span>
                <p>I am a system administrator with 5 years of experience. My main focus is the configuration and maintenance of networks and software. I also took web programming courses as I enjoy web application development. I work diligently on the tasks assigned to me and successfully complete them. </p>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="neutoral" sx={{ borderRadius: '30px', color: 'white' }} onClick={goAbout}>MORE ABOUT ME</Button>
                </ThemeProvider>
            </div>
            <ImageProfile/>
        </div>
    )
}

const styles = {
    container : {
        display: 'flex', 
        justifyContent: 'space-between',
        height: '100vh'
    },
    textName : {
        fontFamily: 'Alumni Sans Collegiate One, sans-serif',
        fontSize: '70px',
        margin: 0,
        letterSpacing: '5px'
    },
    text : {
        fontSize: '40px',
        fontFamily: '-apple-system, sans-serif',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: '100px'
    }
}

const theme = createTheme({
    palette: {      
      neutoral: {
        main: '#fdb82c'
      }
    },
  });