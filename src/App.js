import { StartPage } from './components/pages/StartPage';
import { Menu } from './components/Menu';
import { Box, Grid, Paper } from '@mui/material';
import Image from './assets/img/background-image.jpg';
import MyRoutes from './components/MyRoutes';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import MyButton from './components/buttons/MyButton';
import { useMemo, useState, useContext, createContext } from 'react';
import { ColorModeContext } from './components/buttons/MyButton';
import { amber, grey, deepOrange, blueGrey } from '@mui/material/colors';
import counterSlice from './counterSlice';
import { useSelector } from 'react-redux';

function App() {
  let colorTheme = useSelector((state) => state.counter.theme);
  const [mode, setMode] = useState(colorTheme);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: (colorTheme) => {
        // setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        switch(colorTheme){
          case 'light': setMode('light');
          break;
          case 'dark' : setMode('dark');
        }
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: amber,
                divider: amber[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
                warning: {
                  main: '#d50000'
                },
                secondary: {
                  main: '#ce93d8'
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: '#83B9E5'
                },
                secondary: {
                  main: '#ab47bc'
                },
                divider: blueGrey[700],
                background: {
                  default: blueGrey[900],
                  paper: blueGrey[900],
                },
                text: {
                  primary: '#fff',
                  secondary: grey[500],
                },
                warning: {
                  main: '#dd2c00'
                }              
              }),
        },
      }),
    [mode],
  );
  
  return (    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: 'background.default', color: 'text.primary' }}>
              {/* <MyButton/> */}
              <MyRoutes/>          
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
