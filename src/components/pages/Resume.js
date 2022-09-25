import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import English from '../languages/English';
import Typography from '@mui/material/Typography';
import Ukrainian from '../languages/Ukrainian';
import Russian from '../languages/Russian';
import Grid from '@mui/material/Grid';
import { TabScrollButton } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

function TabPanel(props) {
    const { children,value,index,...other } = props;

    function scrollView() {
        const about = document.getElementById("about");
        about.scrollIntoView({ behavior: "smooth" });
      }
       
        useEffect(() => {
          scrollView()
        },[])
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Resume = () => {

    const [value,setValue] = useState(0);

    const handleChange = (event,newValue) => {
        setValue(newValue);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box className="container-info" sx={{bgcolor: 'background.default', color: 'text.primary'}}>

            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    <Box  className="about" id="about" style={styles.about}>
                        <h2>resume</h2>
                    </Box>
                </Grid>
                <Grid item >

                    <Box  className="resume" style={styles.resume}>
                        <Box  className='resume-item'>
                            <Box  className='edu'>
                                <h3>EDUCATION</h3>
                                <Box  className='education' style={styles.items}>

                                    <Box  className='resume-education-items'>
                                        <Box sx={{background: 'primary.main', backgroundColor: 'primary.main', color: 'text.primary'}} className='years'><small>2009-2014</small></Box>
                                        <Box >
                                            <p><strong>Kherson National Technicial University</strong>
                                                <br />
                                                Computer systems and Networks (BSc. & MSc )</p>
                                        </Box>
                                    </Box>
                                    <Box  className='resume-education-items'>
                                        <Box sx={{background: 'primary', backgroundColor: 'primary.main', color: 'text.primary'}} className='years'><small>2019-2022</small></Box>
                                        <Box >
                                            <p><strong>Computer academy STEP</strong>
                                                <br />
                                                Basic programming languages</p>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='lang'>
                                <h3>LANGUAGES</h3>

                                <Box sx={{ maxWidth: '100%',borderColor: 'divider' }}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="scrollable"
                                        scrollButtons
                                        allowScrollButtonsMobile
                                        aria-label="languages tabs"
                                    >
                                        <Tab wrapped label="English" {...a11yProps(0)} />
                                        <Tab wrapped label="Українська" {...a11yProps(1)} />
                                        <Tab wrapped label="Русский" {...a11yProps(2)} />
                                    </Tabs>
                                    <TabPanel value={value} index={0} >
                                        <English />
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Ukrainian />
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <Russian />
                                    </TabPanel>
                                </Box>
                            </Box>
                        </Box>
                        <Divider variant="middle" />
                        <h3>EXPERIENCE</h3>
                        <Box  className='experience'>
                            <Box sx={{background: 'primary', backgroundColor: 'primary.main', color: 'text.primary'}} className='years'><small>2017-2022</small></Box>
                            <p><strong>System Administrator</strong>
                                <br />
                            </p>
                            <ul>
                                <li>Windows Server Maintenance</li>
                                <li>Installing and configuring
                                    software for the work of
                                    employees</li>
                                <li>Installation and
                                    configuration of peripheral
                                    devices</li>
                            </ul>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Resume;

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
    resume: {
        padding: 40,
        paddingTop: 10
    },
    items: {
        display: 'flex',
        columnGap: '40px'
    }

}