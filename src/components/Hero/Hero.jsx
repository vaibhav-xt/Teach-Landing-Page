import img from '../../assets/headerimg.svg'
import './Hero.css'
import enroll_1 from '../../assets/enroll_1.png'
import enroll_2 from '../../assets/enroll_2.png'
import enroll_3 from '../../assets/enroll_3.png'
import enroll_4 from '../../assets/enroll_4.png'
import enroll_5 from '../../assets/enroll_5.png'
import enroll_6 from '../../assets/enroll_6.png'
export default function Hero() {
    return (
        <div className="header">
            <div className="header-left">
                <h1>Unlock Your Potential in <br /> Finance & Banking </h1>
                <h4>Transform your dreams into Careers</h4>
                <p>Learn, build your job profile with exclusive placement <br /> assistance for 3+ years and get placed in your dream <br /> company. Join the collaborative community of live trainers, <br /> catering to various Finance Skills needed in the finance <br /> industry.</p>
                <a href="/" className='getStarted'>Get Started</a>
                <div className='std-enroll'>
                    <div>
                        <div className="img img-1">
                            <img src={enroll_1} alt="" />
                        </div>
                        <div className="img img-2">
                            <img src={enroll_2} alt="" />
                        </div>
                        <div className="img img-3">
                            <img src={enroll_3} alt="" />
                        </div>
                        <div className="img img-4">
                            <img src={enroll_4} alt="" />
                        </div>
                        <div className="img img-5">
                            <img src={enroll_5} alt="" />
                        </div>
                        <div className="img img-6">
                            <img src={enroll_6} alt="" />
                        </div>
                        <div className="img img-7">1k+</div>
                    </div>
                    <p>1600 students have already registered their interest just within the last month.</p>
                </div>
            </div>
            <div className='header-right'>
                <img src={img} alt="img" />
            </div>
        </div>
    )
}
