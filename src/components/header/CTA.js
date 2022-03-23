import CV from '../../assets/cv_nicolas-pedenau.pdf'


function CTA() {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
        </div>
    )
}

export default CTA
