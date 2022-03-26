import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { MdTextsms } from 'react-icons/md'


// Penser à importer npm install emailjs-com --save et connecter outlook quand il sera opérationnel
function Contact() {
    return (
        <section id="contact">
            <h2>En savoir plus</h2>
            <div className="container contact__container">
                <article className="contact__option">
                    <MdOutlineEmail className="contact__option-icon" />
                    <h4>Email</h4>
                    <h5>nicolas.pedenau@hotmail.fr</h5>
                    <a href="mailto:nicolas.pedenau@hotmail.fr" rel="noreferrer"  target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <RiMessengerLine className="contact__option-icon" />
                    <h4>Messenger</h4>
                    <h5>Nicolas Pedenau</h5>
                    <a href="https://m.me/Wearenico" rel="noreferrer"  target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <MdTextsms className="contact__option-icon" />
                    <h4>Mobile</h4>
                    <h5>+33749646931</h5>
                    {/* <a href="https://api.whatsapp.com/send?phone+61413623901" rel="noreferrer"  target="_blank">Send a message</a> */}
                    <a href="tel:+33749646931" rel="noreferrer"  target="_blank">Send a message</a>
                </article>
                {/* <form action="">
                    <input type="text" name="name" placeholder="Your full name" required />
                    <input type="email" name="email" placeholder="Your email" required />
                    <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form> */}
            </div>
        </section>
    )
}

export default Contact
