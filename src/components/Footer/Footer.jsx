import './Footer.css'
import feLogo from '../../assets/fe_logo.jpg'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import linkedin from '../../assets/linkedin.svg'

export default function Footer() {
    return (
        <>
            <section className='section-wrapper ready-container'>
                <h2>Ready to Transform Your <br /> Career ?</h2>
                <a href="/" className='getStarted'>Get Started</a>

                <div className='footer-container'>

                </div>
            </section>
            <footer>
                <div className='section-wrapper footer-container'>
                    <div className='footer-upper'>
                        <img src={feLogo} alt="" />
                        <div>
                            <p>Explore</p>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Courses</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Features</a></li>
                            </ul>
                        </div>
                        <div>
                            <p>Company</p>
                            <ul>
                                <li><a href="/">Terms & Conditions</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Contact us</a></li>
                            </ul>
                        </div>
                        <div>
                            <p>Get in touch</p>
                            <ul>
                                <li><a href="/">B-1213 We Work, <br /> Andheri 400093</a></li>
                                <li>
                                    <a href="tel:+91-8850991017">+91-8850991017</a> <br />
                                    <a href="tel:+918424853124">+91-8424853124</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='copyright-container'>
                        <p>&copy; 2021 FutureEdge. All rights reserved.</p>
                        <p>
                            <a href="/"><img src={instagram} alt="" /></a>
                            <a href="/"><img src={whatsapp} alt="" /></a>
                            <a href="/"><img src={linkedin} alt="" /></a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
