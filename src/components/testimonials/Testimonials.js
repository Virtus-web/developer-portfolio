import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'

// Import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'


const data = [
    {
        id: 1,
        avatar: Avatar1,
        name: "Camille Combal",
        review: "Merci à tous !"
    },
    {
        id: 2,
        avatar: Avatar2,
        name: "Jean-Pierre Foucault",
        review: "Très professionnel"
    },
    {
        id: 3,
        avatar: Avatar3,
        name: "Denis Brogniart",
        review: "Très à l'écoute des besoins"
    }
]


function Testimonials() {

    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
            {
                data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </section>
    )
}

export default Testimonials
