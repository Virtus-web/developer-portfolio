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
            <a href="/#" className={activeNav === '#' ? 'active' : '' } onClick={() => setActiveNav('#')}><AiOutlineHome /></a> 
            {/* <a href="/#about" className={activeNav === '#about' ? 'active' : '' } onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>  */}
            <a href="/#portfolio" className={activeNav === '#portfolio' ? 'active' : '' } onClick={() => setActiveNav('#portfolio')}><BiBook /></a> 
            <a href="/#services" className={activeNav === '#services' ? 'active' : '' } onClick={() => setActiveNav('#services')}><RiServiceFill /></a> 
            <a href="/#contact" className={activeNav === '#contact' ? 'active' : '' } onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a> 
        </nav>
    )
}

export default Nav
