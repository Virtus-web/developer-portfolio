import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import { ThemeContext } from './utils/index'


function App() {

    const [modal, setModal] = useState('')
    const activeModal = () => {
        setModal(modal === 'active' ? '' : 'active')
    }

    return (
        <ThemeContext.Provider value={{ modal, activeModal }}>
            <Header />
            <Nav />
            <Experience />
            <Portfolio />
            <Services />
            <Contact />
            <Footer />
        </ThemeContext.Provider>
    )
}

export default App
