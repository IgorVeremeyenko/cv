import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useState } from 'react';

const Footer = () => {
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ backgroundColor:'#FDB82C', height: '-webkit-fill-available', gridColumn: '1 / 4' }} value={value} onChange={handleChange}>
        <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
        />
        <BottomNavigationAction label="About me" value="about me" icon={<PersonIcon />} />
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
    )
}

export default Footer;