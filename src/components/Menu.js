import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { MyDivider } from './MyDivider';

export const Menu = () => {
    const iconsList = ['HomeIcon', 'PersonIcon', 'InboxIcon', 'WorkIcon', 'SettingsEthernetIcon', 'ContactPageIcon'];
    return (
        <div style={{ marginTop: '22vh', backgroundColor: '#FDB82C', width: 'min-content', marginRight: '20px', paddingBottom: '10px', paddingTop: '10px', borderRadius: '30px', height: 'min-content', right: '10px',
        position: 'absolute' }}>
            <Box sx={{ width: '100%' }}>
                <nav aria-label="menu">
                    <List sx={{ width: '57px', display: 'flex', flexDirection: 'column', rowGap: '14px', alignItems: 'center', padding: 0 }}>                        
                        <ListItem disablePadding sx={{ borderRadius: 2 }}>
                            <ListItemButton sx={{ borderRadius: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <HomeIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <MyDivider/>
                        <ListItem disablePadding sx={{ borderRadius: 2 }}>
                        <ListItemButton sx={{ borderRadius: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <PersonIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <MyDivider/>
                        <ListItem disablePadding sx={{ borderRadius: 2 }}>
                            <ListItemButton sx={{ borderRadius: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <InboxIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <MyDivider/>
                        <ListItem disablePadding sx={{ borderRadius: 2 }}>
                            <ListItemButton sx={{ borderRadius: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <WorkIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <MyDivider/>
                        <ListItem disablePadding sx={{ borderRadius: 2 }}>
                            <ListItemButton sx={{ borderRadius: 2 }}>
                                <ListItemIcon>
                                    <SettingsEthernetIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                        <MyDivider/>
                        <ListItem disablePadding sx={{ borderRadius: 2 }}>
                            <ListItemButton sx={{ borderRadius: 2 }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <ContactPageIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>


            </Box>
        </div>
    )
}