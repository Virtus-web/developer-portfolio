import './portfolio.css'
import Modal from '../modal/Modal'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../utils/index'
import { websiteData } from '../../data/website'

// Import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// const { id, image, title, description, site } = websiteData


function Portfolio() {

    const { activeModal } = useContext(ThemeContext)
    const [ devInfos, setDevInfos ] = useState()

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
                    websiteData.map(({id, image, title, description, site}) => {
                        return (
                            <SwiperSlide key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={require(`../../assets/${image}`)} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <button className="btn" onClick={() => {
                                        activeModal()
                                        setDevInfos(
                                            websiteData.filter(element => element.id === id)
                                        )
                                    }}
                                    >{description}</button>
                                    <a href={site} className="btn btn-primary" rel="noreferrer" target="_blank">Lien du site</a>                        
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
            <Modal {...devInfos} />
        </section>
    )
}

export default Portfolio
