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
                                <small>Marketing et Communication - 8+ ans</small>
                            </div>
                        </article>
                    </div>

                    <p>Après une évolution positive dans le domaine des médias et de la communication, j'ai orienté mes projets professionnels vers le développement informatique afin de poursuivre mes objectifs. Les deux années qui viennent de s'écouler ont été pour moi l'occasion de développer des projets dans un cadre indépendant, cela m'a également permis d'acquérir de nouvelles compétences en aduéquation avec les demandes du marché. Aujourd'hui, j'ai la volonté de rejoindre une entreprise au sein d'une équipe alliant cohésion et dynamisme.</p>

                </div>
            </div>
        </section>
    )
}

export default About
