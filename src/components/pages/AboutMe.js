import Divider from '@mui/material/Divider';
import network from '../../assets/img/network.svg';
import web from '../../assets/img/web-design.svg';

const AboutMe = () => {
    return (
        <div className="container-info" style={{ flex: 2 }}>
        <div className="about" style={styles.about}>
          <h2>about me</h2>
        </div>
        <div className="biographi" style={styles.biographi}>
          <div style={{fontSize: '24px'}}>I'm <strong>Igor Veremiienko</strong>, Software Engineer</div>
          <p>I can't imagine my life without a computer. I won’t say that I am an avid programmer, but I can only work hard at a computer.</p>
          <div className="options">
            <h3>What I do?</h3>
            <div className="items" style={styles.items}>
              <div className="biographi-todos">
                <img src={network} width={40} height={40} />
                <h4>System Administrator</h4>
                <p>I keep the network in a good condition, install programms and serve printers</p>
              </div>
              <Divider orientation="vertical" variant="middle" flexItem sx={{margin: '30px'}}/>
              <div className="biographi-todos">
                <img src={web} width={40} height={40} />
                <h4>Web development</h4>
                <p>Easy applications to calculate and accounting data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutMe;

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
      biographi: {
        padding: 40
      },
      items: {
        display: 'flex',
        justifyContent: 'space-around'
      }
}