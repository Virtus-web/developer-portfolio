import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'


function Experience() {
    return (
        <section id="experience">
            <h2>Compétences techniques</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <h4>HTML</h4>
                            
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <h4>BOOTSTRAP</h4>
                            
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>JAVASCRIPT</h4>
                            
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>REACT</h4>
                             
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>REDUX</h4>
                            
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MONGO DB</h4>
                                
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>EXPRESS</h4>
                                
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>NODE</h4>
                                
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
