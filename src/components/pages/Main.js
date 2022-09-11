import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import myAvatar from '../../assets/img/me.png';
import { LeftSideMenu } from "./LeftSideMenu";
import LanIcon from '@mui/icons-material/Lan';
import TerminalIcon from '@mui/icons-material/Terminal';
import network from '../../assets/img/network.svg';
import web from '../../assets/img/web-design.svg';
import Divider from '@mui/material/Divider';
import { Menu } from "../Menu";
import { createElement, useEffect, useState } from "react";
import List from '@mui/material/List';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import { Switch, Route, Routes, useRoutes } from 'react-router-dom';
import { Portfolio } from "./Portfolio";
import AboutMe from "./AboutMe";
import MyRoutes from "../MyRoutes";
import Resume from "./Resume";
import Contact from "./Contact";

export const Main = () => {
  const [page, setPage] = useState('about');
  const pathname = window.location.pathname.split('/');
 
  useEffect(() => {
    setPage(pathname[2]);
  },[])
  const pages = {
    'home' : 'StartPage',
    'about' : 'AboutMe',
    'resume' : 'Resume',
    'portfolio' : 'Portfolio',
    'contact' : 'Contact',
  }

  const CustomTag = () => {
    const Temp = pages[page];
    return <Temp/>;
  }

  let navigate = useNavigate();
  
  const goHome = () => {
    navigate("/");
  }
  
  const goToPage = (value) => {
    navigate(`${value}`);
  }
  
  const handleChange = (event, newValue) => {
    setPage(newValue);
    if(newValue === 'home') goHome();
    else goToPage(newValue);
  };

  return (
    <div className="main" style={styles.main}>
      <LeftSideMenu />
      <div>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />            
            <Route path="/about" element={<AboutMe />} />            
            <Route path="/resume" element={<Resume />} />            
            <Route path="/contact" element={<Contact />} />            
          </Routes>
      </div>
      <BottomNavigation sx={{ backgroundColor:'#FDB82C', height: '-webkit-fill-available', gridColumn: '1 / 4' }} value={page} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />        
      }
      />
      <BottomNavigationAction label="About me" value="about" icon={<PersonIcon />} />
      <BottomNavigationAction
        label="Resume"
        value="resume"
        icon={<DocumentScannerIcon />}
      />
      <BottomNavigationAction
        label="Portfolio"
        value="portfolio"
        icon={<NextWeekIcon />}
      />
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={<ContactPageIcon />}
      />
    </BottomNavigation>
    </div>
  );
}

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
  main: {
    display: 'grid',
    background: 'floralwhite',
    gridTemplateColumns: '19rem 4fr',
    height: '100vh',
    gridTemplateRows: '1fr'
  },
  biographi: {
    padding: 40
  },
  items: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}