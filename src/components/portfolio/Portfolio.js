import './portfolio.css'
import Projet1 from '../../assets/mariage.jpg'
import Projet2 from '../../assets/sport.jpg'
import Projet3 from '../../assets/kasa.jpg'
import Projet4 from '../../assets/shiny.jpg'
import Projet5 from '../../assets/shop.jpg'

// Import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'


//Noter le fait qu'il ne faut pas utiliser les images comme ça en production (public vs assets) avec l'url pour fetch dans le cahier
//importer les data depuis un dossier à part
const data = [
    {
        id: 1,
        image: Projet1,
        title: "Site de mariage",
        github: "https://github.com/Virtus-web/mariage-carineetpierre",
        site: "https://marriagecarineetpierre.netlify.app"
    },
    {
        id: 2,
        image: Projet2,
        title: "Site de suivi sportif",
        github: "https://github.com/Virtus-web/mariage-carineetpierre",
        site: "https://marriagecarineetpierre.netlify.app"
    },
    {
        id: 3,
        image: Projet3,
        title: "Site de location de vacances",
        github: "https://github.com/Virtus-web/mariage-carineetpierre",
        site: "https://marriagecarineetpierre.netlify.app"
    },
    {
        id: 4,
        image: Projet4,
        title: "Site de recrutement",
        github: "https://github.com/Virtus-web/mariage-carineetpierre",
        site: "https://marriagecarineetpierre.netlify.app"
    },
    {
        id: 5,
        image: Projet5,
        title: "Site de e-commerce",
        github: "https://github.com/Virtus-web/mariage-carineetpierre",
        site: "https://marriagecarineetpierre.netlify.app"
    }
]


function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>

            <Swiper className="container portfolio__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {
                    data.map(({id, image, title, github, site}) => {
                        return (
                            <SwiperSlide key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" rel="noreferrer" target="_blank">GitHub</a>
                                    <a href={site} className="btn btn-primary" rel="noreferrer" target="_blank">Lien du site</a>                        
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Portfolio
