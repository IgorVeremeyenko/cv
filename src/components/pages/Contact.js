import computer from '../../assets/img/computer.svg'
import phone from '../../assets/img/phone.svg'
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import { Divider } from '@mui/material';
import {Box} from '@mui/system';
import { useEffect } from 'react';

const Contact = () => {
  function scrollView() {
    const about = document.getElementById("contact");
    about.scrollIntoView({ behavior: "smooth" });
  }
   
    useEffect(() => {
      scrollView()
    },[])
  return (
    <>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <div className="about" id='contact' style={styles.about}>
            <h2>contact</h2>
          </div>
        </Grid >
        <Grid item xs={12} md={12}>
          <div className="biographi" style={styles.biographi}>
            <p className='namesOfParagraphs'>Feel <strong>free</strong> to contact me.</p>
            <br />
            <p className='paragraphs'>I am free to communicate at any time of the day. I will be glad to any communication</p>
          </div>
        </Grid>        
      </Grid>
          <Stack
            direction={{ sm: 'column', md: 'row' }}
            spacing={{ sm: 2, md: 4 }}
            divider={<Divider variant="middle" />}
            sx={{marginBottom: 5, paddingLeft: 5}}
          >
            <Box>
              <div className="mail">
                <img src={computer} alt="email" width={100} height={100}></img>
                <span>Email: </span>
                <Link href="mailto:viruscomp7@gmail.com" underline="none">
                  {'viruscomp7@gmail.com'}
                </Link>
              </div>
            </Box>
            <Box>
              <div className="phone">
                <img src={phone} alt="phone" width={100} height={100}></img>
                <Link href="tel:+496170961709" underline="none">
                  {'Call me, anytime +48 451 552 506'}
                </Link>
              </div>
            </Box>
          </Stack>
      <div className="container-info" style={{ flex: 2 }}>
        <div style={{ textAlign: 'center', marginTop: 5 }}>
          <h2 style={{ textTransform: 'uppercase' }}>thanks for patience!</h2>
        </div>
      </div>
    </>
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