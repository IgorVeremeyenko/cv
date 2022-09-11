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
import { CardActionArea } from '@mui/material';
import { faAngular, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from '@mui/material/Box';

// const routeToMomentum = () => {
//     window.open('https://igorveremeyenko.github.io/'); 
// }

// const routeToExchange = () => {
//   window.open('https://igorveremiienko.neocities.org/'); 
// }

const Portfolio = () => {
  
    return (
        <Box className="container-info" style={{ flex: 2 }}>
        <Box className="about" style={styles.about}>
          <h2>portfolio</h2>
        </Box>
        <Box className="names" sx={{padding: '10px 50px'}}>
        <Link underline="hover" color="#FDB82C" variant='button'>
            {'Web Development'}
        </Link>
        </Box>
        <Box className='observable'>
          <Box className='portfolio-items'>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <FontAwesomeIcon icon={faHtml5} size="2x" color="#DD4B25"/>
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
          </Box>
          <Box className='portfolio-items'>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                  <FontAwesomeIcon icon={faAngular} size="2x" color="red"/>
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
          </Box>
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