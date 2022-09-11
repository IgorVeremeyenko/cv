import Divider from '@mui/material/Divider';
import { useLocation } from "react-router";

const Resume = () => {

    return (
        <div className="container-info" style={{ flex: 2 }}>
        <div className="about" style={styles.about}>
          <h2>resume</h2>
        </div>
        <div className="resume" style={styles.resume}>
            <h3>EDUCATION</h3>
            <div className='education' style={styles.items}>
                <div className='resume-education-items'>
                    <div className='years'><small>2009-2014</small></div>
                    <p><strong>Kherson National Technicial University</strong>
                    <br/>
                        Computer systems and Networks (BSc. & MSc )</p>
                </div>
                <div className='resume-education-items'>
                    <div className='years'><small>2019-2022</small></div>
                    <p><strong>Computer academy STEP</strong>
                    <br/>
                    Basic programming languages</p>
                </div>
            </div>
            <Divider variant="middle" />
            <h3>EXPERIENCE</h3>
            <div className='experience'>
                <div className='years'><small>2017-2022</small></div>
                <p><strong>System Administrator</strong>
                <br/>
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