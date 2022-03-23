import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Profile from '../../assets/profile.jpg'


function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Bonjour</h5>
                <h1>Nicolas Pedenau</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                
                <div className="me">
                    <img src={Profile} alt="profile" />
                </div>

            </div>
        </header>
    )
}

export default Header
