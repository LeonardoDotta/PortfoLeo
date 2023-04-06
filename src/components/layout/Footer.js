import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <footer styles='footer'>
            <ul className='social_list'>
            <li><FaFacebook /></li>
            <a href='https://www.instagram.com/leo_dotta26'
            target="_blank"
            body="hello world"
            rel="noopener noreferrer">
            <li><FaInstagram /></li>
            </a>
            <li><FaLinkedin /></li>
            </ul>
            <p className='copy_right'><span>PortfóLeo</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer