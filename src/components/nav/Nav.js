import './nav.css'
// import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceFill } from 'react-icons/ri'
import { useState } from 'react'


function Nav() {

    const [ activeNav, setActiveNav ] = useState('#')

    return (
        <nav>
            <a href="/developer-portfolio/#" className={activeNav === '/developer-portfolio/#' ? 'active' : '' } onClick={() => setActiveNav('/developer-portfolio/#')}><AiOutlineHome /></a> 
            {/* <a href="/#about" className={activeNav === '#about' ? 'active' : '' } onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>  */}
            <a href="/developer-portfolio/#portfolio" className={activeNav === '/developer-portfolio/#portfolio' ? 'active' : '' } onClick={() => setActiveNav('/developer-portfolio/#portfolio')}><BiBook /></a> 
            <a href="/developer-portfolio/#services" className={activeNav === '/developer-portfolio/#services' ? 'active' : '' } onClick={() => setActiveNav('/developer-portfolio/#services')}><RiServiceFill /></a> 
            <a href="/developer-portfolio/#contact" className={activeNav === '/developer-portfolio/#contact' ? 'active' : '' } onClick={() => setActiveNav('/developer-portfolio/#contact')}><BiMessageSquareDetail /></a> 
        </nav>
    )
}

export default Nav
