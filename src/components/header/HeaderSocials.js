import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/nicolas-pedenau" rel="noreferrer" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Virtus-web" rel="noreferrer" target="_blank"><FaGithub /></a>
            <a href="#contact" className="scroll__down">Contact</a>
        </div>
    )
}

export default HeaderSocials
