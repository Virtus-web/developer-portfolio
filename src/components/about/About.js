import './about.css'
import Profile from '../../assets/profile3.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'


function About() {
    return (
        <section id="about">
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
                            <h5>Formation</h5>
                            <div className="formation__box">
                                <small>Développement Web - BAC+4</small>
                                <small>Finance - Master</small>
                            </div>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Experience</h5>
                            <div className="formation__box">
                                <small>Développement Web - 1+ an</small>
                                <small>Marlketing et Communication - 8+ ans</small>
                            </div>
                        </article>
                    </div>

                    <p>Après une évolution positive dans le domaine des médias et de la communication, j'ai amorcé un changement de carrière orienté vers le développement informatique afin d'être plus cohérent avec mes objectifs professionnels et personnels. Durant ces trois dernières années, j'ai ainsi perfectionné mon travail afin d'acquérir les compétences techniques nécessaires à un cadre professionnel.</p>

                </div>
            </div>
        </section>
    )
}

export default About
