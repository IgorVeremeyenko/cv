import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import momentum from '../../assets/img/momentum.png';
import exchange from '../../assets/img/exchange.png';
import Tooltip from '@mui/material/Tooltip';
import { CardActionArea,Divider,Grid } from '@mui/material';
import { faAngular,faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';

const Portfolio = () => {

  function scrollView() {
    const about = document.getElementById("about");
    about.scrollIntoView({ behavior: "smooth" });
  }
   
    useEffect(() => {
      scrollView()
    },[])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box className="container-info" >
      <Box className="about" id="about" style={styles.about}>
        <h2>portfolio</h2>
      </Box>

      <Box className="names" sx={{ padding: '10px 50px' }}>
        <Link underline="hover" color="#FDB82C" variant='button'>
          {'Web Development'}
        </Link>
      </Box>
      <Box className='observable'>
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          spacing={{ xs: 2, sm: 2, md: 4 }}
          divider={<Divider variant="middle" />}
          sx={{marginBottom: 5, marginRight: 5}}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <FontAwesomeIcon icon={faHtml5} size="2x" color="#DD4B25" />
              }
              title="Made by HTML/CSS/JavaScript"
              subheader="July, 2022"
            />
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={momentum}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Momentum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  An alternative to the popular Momentum app. It is avialable on two languages: English and russian
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Tooltip title="The link will be opened on the new tab" placement="top">
                <Button size="small" href="https://igorveremeyenko.github.io/" target="_blank" color='primary'>Check it</Button>
              </Tooltip>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <FontAwesomeIcon icon={faAngular} size="2x" color="red" />
              }
              title="Made by Angular TS"
              subheader="February, 2022"
            />
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={exchange}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="Box">
                  Exchange Rate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Exchange rate online. The site is made for the Ukrainian audience. API is taken from the National Bank of Ukraine
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Tooltip title="The link will be opened on the new tab" placement="top">
                <Button size="small" href="https://igorveremiienko.neocities.org/" target="_blank" color='primary'>Check it</Button>
              </Tooltip>
            </CardActions>
          </Card>
        </Stack>
      </Box>
    </Box>
  )
}

export default Portfolio;

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