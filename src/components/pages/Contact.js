import computer from '../../assets/img/computer.svg'
import phone from '../../assets/img/phone.svg'
import Link from '@mui/material/Link';

const Contact = () => {
    return (
        <div className="container-info" style={{ flex: 2 }}>
        <div className="about" style={styles.about}>
          <h2>contact</h2>
        </div>
        <div className="biographi" style={styles.biographi}>
          <p className='namesOfParagraphs'>Feel <strong>free</strong> to contact me.</p>
          <br/>
          <p className='paragraphs'>I am free to communicate at any time of the day. I will be glad to any communication</p>
        </div>
        <div className="contacts" style={styles.contacts}>
            <div className="mail">
                <img src={computer} alt="email" width={100} height={100}></img>
                <span>Email: </span> 
                <Link href="mailto:viruscomp7@gmail.com" underline="none">
                {'viruscomp7@gmail.com'}
                </Link>
            </div>
            <div className="phone">
            <div className="mail">
                <img src={phone} alt="phone" width={100} height={100}></img>
                <Link href="tel:+496170961709" underline="none">
                {'Call me, anytime +48 451 552 506'}
                </Link>
            </div>
            </div>
        </div>
        <div style={{textAlign: 'center'}}>
            <h2 style={{textTransform: 'uppercase'}}>thanks for patience!</h2>
        </div>
        </div>
    )
}

export default Contact;

const styles = {
    about: {
        textTransform: 'uppercase',
        border: '1px solid #a9a4a4b8',
        flex: 1,
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        fontSize: '30px'
      },
      biographi: {
        padding: 40,
        paddingTop: 10
      },
      items: {
        display: 'flex',
        justifyContent: 'space-around'
      },
      contacts: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 40
      }
}