import { Button } from "@mui/material"
import { ImageProfile } from "../ImageProfile"
import { ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import photo from '../../assets/img/photo.jpg'
import Avatar from '@mui/material/Avatar';
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';

export const StartPage = () => {

    let navigate = useNavigate();

    const goAbout = () => {
      navigate("/main/about");
    }

    const theme = useTheme();

    return (
        <Box className="mainPageBox" style={styles.container} sx={{bgcolor: 'background.default', color: 'text.primary'}}>
            <Box className="text" style={{flex: 2, padding: '50px'}}>
                <Box className="avatar">
                    <Avatar
                    alt="Igor Veremiienko"
                    src={photo}
                    sx={{ width: 220, height: 220 }}
                    />
                    </Box>
                <p style={styles.text}> HI THERE!</p>
                <p style={styles.textName}>I'M <Typography variant="caption" sx={{ fontFamily: 'Alumni Sans Collegiate One, sans-serif', color: 'primary.main', fontSize: '70px' }}>IGOR</Typography></p>
                <Typography sx={{ fontSize: '24px', padding: '1px 10px', borderRadius: '5px', background: 'primary', backgroundColor: 'primary.main' }}>Software Engineer / System Administrator</Typography>
                <p>I am a system administrator with 5 years of experience. While learning programming languages, I found that Frontend is the most interesting for me. Now I'm looking for a job opportunity at this direction. </p>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" sx={{ borderRadius: '30px', color: 'white', marginBottom: 5 }} onClick={goAbout}>MORE ABOUT ME</Button>
                </ThemeProvider>
            </Box>
            <Box className="imageProfile"  id="imageProfile" sx={{width: '50%'}}>
                <ImageProfile />
            </Box>
        </Box>
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

// const theme = createTheme({
//     palette: {      
//       neutoral: {
//         main: '#fdb82c'
//       }
//     },
//   });