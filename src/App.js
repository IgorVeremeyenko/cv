import { StartPage } from './components/pages/StartPage';
import { Menu } from './components/Menu';
import { Box, Grid, Paper } from '@mui/material';
import Image from './assets/img/background-image.jpg';
import MyRoutes from './components/MyRoutes';

function App() {
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <MyRoutes/>          
        </Box>
      </Grid>
    </Grid>
  )
}

export default App;
