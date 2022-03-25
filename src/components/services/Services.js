import './services.css'
import { BiCheck } from 'react-icons/bi'


function Services() {
    return (
        <section id="services">
            <h2>Services</h2>

            <div className="container services__container">

                <article className="service">
                    <div className="service__head">
                        <h3>Développement Web & Création de contenu</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Accompagnement depuis l'étude de vos besoins jusqu’à la mise en production de votre site internet, en passant par la conception de votre projet web. Relations étroites avec vous tout au long du parcours afin d'être à l'écoute des besoins et des questions techniques.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Analyse de votre stratégie marketing et élaboration de maquettes répondant à des problématiques ciblées. Gestion du projet efficace pour maitriser les coûts et les délais. Assurer les mises à jour de votre site internet.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Faire vivre votre site web en l'alimentant en contenus. Utiliser les réseaux sociaux pour gérer votre communauté et rester proche de vos clients.</p>
                        </li>
                    </ul>
                </article>

                {/* <article className="service">
                    <div className="service__head">
                        <h3>Création de contenu</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Et ullam eius qui impedit galisum sed autem assumenda cum doloribus laudantium 33 blanditiis autem. Non dignissimos magnam in aliquam odit eum aliquam voluptatem? Ut quis repudiandae ut saepe totam a quia necessitatibus. Ut voluptatibus quos aut omnis obcaecati et maxime sint.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Et ullam eius qui impedit galisum sed autem assumenda cum doloribus laudantium 33 blanditiis autem. Non dignissimos magnam in aliquam odit eum aliquam voluptatem? Ut quis repudiandae ut saepe totam a quia necessitatibus. Ut voluptatibus quos aut omnis obcaecati et maxime sint.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Et ullam eius qui impedit galisum sed autem assumenda cum doloribus laudantium 33 blanditiis autem. Non dignissimos magnam in aliquam odit eum aliquam voluptatem? Ut quis repudiandae ut saepe totam a quia necessitatibus. Ut voluptatibus quos aut omnis obcaecati et maxime sint.</p>
                        </li>
                    </ul>
                </article> */}
            </div>
        </section>
    )
}

export default Services
