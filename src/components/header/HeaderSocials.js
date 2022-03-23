import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import CV from '../../assets/cv_nicolas-pedenau.pdf'


function HeaderSocials() {
    return (
        <div className="header__socials">
            <div className="socials__icon">
                <a href="https://www.linkedin.com/in/nicolas-pedenau" rel="noreferrer" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/Virtus-web" rel="noreferrer" target="_blank"><FaGithub /></a>
            </div>
            <a className="btn scroll__down--1" href="#contact" >Discutons</a>
            <a href={CV} download className="btn btn-primary scroll__down--2">Télécharger mon CV</a>
        </div>
    )
}

export default HeaderSocials
