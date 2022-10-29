import { ReactComponent as Computer } from '../../assets/img/computer.svg'
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { Divider } from '@mui/material';
import {Box} from '@mui/system';
import { useEffect } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Phone } from '../../assets/img/phone.svg';

const Contact = () => {
  function scrollView() {
    const about = document.getElementById("contact");
    about.scrollIntoView({ behavior: "smooth" });
  }
   
    useEffect(() => {
      scrollView()
    },[])
  return (
    <Box sx={{bgcolor: 'background.default', color: 'text.primary', '@media (max-width: 720px)': {marginTop: '5px'}}}>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Box  className="about" id='contact' style={styles.about}>
            <h2>contact</h2>
          </Box>
        </Grid >
        <Grid item xs={12} md={12}>
          <Box  className="biographi" style={styles.biographi}>
            <p className='namesOfParagraphs'>Feel <strong>free</strong> to contact me.</p>
            <br />
            <p className='paragraphs'>I am free to communicate at any time of the day. I will be glad to any communication</p>
          </Box>
        </Grid>        
      </Grid>
          <Stack
            direction={{ sm: 'column', md: 'row' }}
            spacing={{ sm: 2, md: 4 }}
            divider={<Divider variant="middle" />}
            sx={{marginBottom: 5, paddingLeft: 5}}
          >
            <Box>
              <Box  className="mail">
                <Computer height={100} width={100} fill='currentColor'/>                
                <Box  style={{display: 'flex', flexDirection: 'column'}}>
                  <span>Email: </span>
                  <Link href="mailto:viruscomp7@gmail.com" underline="none">
                    {'viruscomp7@gmail.com'}
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box  className="phone">
                <Phone height={100} width={100} fill='currentColor'/>
                <Box  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <span>Call me, anytime</span>
                  <Link href="tel:+496170961709" underline="none">
                    {'+48 451 552 506'}
                  </Link>
                </Box>
              </Box>
            </Box>
          </Stack>
      <Box  className="container-info" style={{ flex: 2 }}>
        <Box  style={{ textAlign: 'center', margin: 0, padding: 5 }}>
          <h2 style={{ textTransform: 'uppercase' }}>thanks for patience!</h2>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact;

const styles = {
  about: {
    textTransform: 'uppercase',
    border: '1px solid #a9a4a4b8',
    flex: 1,
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    fontSize: '30px'
  },
  biographi: {
    padding: 40,
    paddingTop: 10
  },
  items: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  contacts: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 40,
    columnGap: 20
  }
}