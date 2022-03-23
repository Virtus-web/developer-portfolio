import './about.css'
import Profile from '../../assets/profile.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


function About() {
    return (
        <section id="about">
            <h2>Get to know</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Profile} alt="profile" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1+ year Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet. Et rerum cupiditate quo laborum doloremque qui adipisci mollitia ut facere optio non dolor tenetur sed soluta aspernatur ex sapiente enim. Et molestiae corrupti est debitis vero aut corrupti voluptatem quo internos libero.</p>

                    <a className="btn btn-primary" href="#contact" >Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
