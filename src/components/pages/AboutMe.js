import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import network from '../../assets/img/network.svg';
import web from '../../assets/img/web-design.svg';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

const AboutMe = () => {  

  function scrollView() {
    const about = document.getElementById("about");
    about.scrollIntoView({ behavior: "smooth" });
  }
   
    useEffect(() => {
      scrollView()
    },[])

    return (
        <Box className="container-info" sx={{bgcolor: 'background.default', color: 'text.primary', flex: 2}}>
        <Box  className="about" id="about" style={styles.about}>
          <h2>about me</h2>
        </Box>
        <Box className="biographi" style={styles.biographi}>
          <Box  style={{fontSize: '24px'}}>I'm <strong>Igor Veremiienko</strong>, Software Engineer</Box>
          <p>I can't imagine my life without a computer. I won’t say that I am an avid programmer, but I can only work hard at a computer.</p>
          <Box className="options">
            <h3>What I do?</h3>
            <Box className="items" style={styles.items}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item sm={8} md={12}> 
                  <Box  className="biographi-todos">
                    <img src={network} width={40} height={40} />
                    <h4>System Administrator</h4>
                    <p>I keep the network in a good condition, install programms and serve printers</p>
                  </Box>
                </Grid>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem sx={{margin: '30px'}}/>
              <Grid item sm={8} md={12}>
                <Box  className="biographi-todos">
                  <img src={web} width={40} height={40} />
                  <h4>Web development</h4>
                  <p>Easy applications to calculate and accounting data</p>
                </Box>
              </Grid>
              <Box>
              </Box>
            </Box >
          </Box >
        </Box >
      </Box>
    )
}

export default AboutMe;

const styles = {
    about: {
        textTransform: 'uppercase',
        border: '1px solid #a9a4a4b8',
        flex: 1,
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
      },
      biographi: {
        padding: 40
      },
      items: {
        display: 'flex',
        justifyContent: 'space-around'
      }
}