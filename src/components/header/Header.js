import './header.css'
import HeaderSocials from './HeaderSocials'
import About from '../about/About'


function Header() {
    return (
        <header>
            <div className="container header__container">
                <h2>Nicolas Pedenau</h2>
                <h3 className="text-light">Fullstack Developer</h3>
                <HeaderSocials />
                <About />
            </div>
        </header>
    )
}

export default Header
