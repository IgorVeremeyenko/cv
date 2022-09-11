import { StartPage } from './components/pages/StartPage';
import { Menu } from './components/Menu';
import { Box, Paper } from '@mui/material';
import Image from './assets/img/background-image.jpg';
import MyRoutes from './components/MyRoutes';

function App() {
  
  return (
    
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <MyRoutes/>
      {/* <Paper sx={{ background: `url(${Image})`, height: '100vh', position: 'fixed', backgroundRepeat: 'round', width: '100%', top: 0, zIndex: -10 }}>
      </Paper> */}
      {/* <Menu /> */}
    </Box>
  )
}

export default App;
