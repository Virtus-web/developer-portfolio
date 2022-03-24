import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'


function Footer() {
    return (
        <footer>
            <a href="/#" className="footer__logo">Virtus</a>
            <ul className="permalinks">
                <li><a href="/developer-portfolio/#">Home</a></li>
                <li><a href="/developer-portfolio/#about">About</a></li>
                <li><a href="/developer-portfolio/#experience">Experience</a></li>
                <li><a href="/developer-portfolio/#portfolio">Portfolio</a></li>
                <li><a href="/developer-portfolio/#services">Services</a></li>
                <li><a href="/developer-portfolio/#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com" rel="noreferrer" target="_blank"><FaFacebook /></a>
                <a href="https://instagram.com" rel="noreferrer" target="_blank"><FiInstagram /></a>
                <a href="https://twitter.com" rel="noreferrer" target="_blank"><IoLogoTwitter /></a>
            </div>
            {/* <div className="footer__copyright">
                <small>&copy; Virtus-web. All rights reserved.</small>
            </div> */}
        </footer>
    )
}

export default Footer
