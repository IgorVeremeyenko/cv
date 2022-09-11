import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import English from '../languages/English';
import Typography from '@mui/material/Typography';
import Ukrainian from '../languages/Ukrainian';
import Russian from '../languages/Russian';

function TabPanel(props) {
    const { children,value,index,...other } = props;

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



    return (
        <div className="container-info" style={{ flex: 2 }}>
            <div className="about" style={styles.about}>
                <h2>resume</h2>
            </div>
            <div className="resume" style={styles.resume}>
                <div className='resume-item'>
                    <div className='edu'>
                        <h3>EDUCATION</h3>
                        <div className='education' style={styles.items}>
                            <div className='resume-education-items'>
                                <div className='years'><small>2009-2014</small></div>
                                <p><strong>Kherson National Technicial University</strong>
                                    <br />
                                    Computer systems and Networks (BSc. & MSc )</p>
                            </div>
                            <div className='resume-education-items'>
                                <div className='years'><small>2019-2022</small></div>
                                <p><strong>Computer academy STEP</strong>
                                    <br />
                                    Basic programming languages</p>
                            </div>
                        </div>
                    </div>
                    <Box className='lang'>
                        <h3>LANGUAGES</h3>
                        <Box sx={{ width: '90%',bgcolor: 'background.paper' }}>
                            <Box sx={{ borderBottom: 1,borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="English" {...a11yProps(0)} />
                                    <Tab label="Українська" {...a11yProps(1)} />
                                    <Tab label="Русский" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
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
                </div>
                <Divider variant="middle" />
                <h3>EXPERIENCE</h3>
                <div className='experience'>
                    <div className='years'><small>2017-2022</small></div>
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
                </div>
            </div>
        </div>
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