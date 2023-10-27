import './Features.css'
import '../Testinomial/Testinomial.css'
import placementProcess from '../../assets/PlacementAssistance.svg'
import photo from '../../assets/testPhoto.png'

export default function Features() {
    return (
        <section className='section-wrapper features-container'>
            <h2>Why Choose Future Edge </h2>
            <div className='feature-info'>
                <div>
                    <div className='features-cards'>
                        <div className='img img-1'></div>
                        <p>In-Demand Certifications</p>
                        <p>FutureEdge provides courses that offer industry-relevant professional certification from CIMA, ACCA, NSDC, FPSB India and others</p>
                    </div>
                    <div className='features-cards'>
                        <div className='img img-2'></div>
                        <p>Hands-on Learning</p>
                        <p>Our one-of-a-kind active learning system delivers concept-based application-oriented learning and skill upgradation.</p>
                    </div>
                    <div className='features-cards'>
                        <div className='img img-3'></div>
                        <p>Convenient Flexible Learning  </p>
                        <p>The flexible learning method is designed to meet working professionals’ and students’ unique schedules and specific needs.</p>
                    </div>
                    <div className='features-cards'>
                        <div className='img img-4'></div>
                        <p>Expert Faculty</p>
                        <p>Our training faculty members of handpicked industry experts and experienced professionals deliver exceptional experiential training.</p>
                    </div>
                    <div className='features-cards'>
                        <div className='img img-5'></div>
                        <p>3+ Year Placement Assistance</p>
                        <p>Get jobs aligned with career goals and choose from a list of curated matching preferences. Comprehensive interview preparation and resume building.</p>
                    </div>
                    <div className='features-cards'>
                        <div className='img img-6'></div>
                        <p>Growth Support Mentors</p>
                        <p>Growth support mentors help improve learning and enhance career aspirations with candidates’ potential.</p>
                    </div>
                </div>
                <div className='placement-process'>
                    <div>
                        <h4>Exclusive Placement <br />Assistance of 3+ Years</h4>
                        <a href="/">Get Started</a>
                    </div>
                    <img src={placementProcess} alt="placementProcess" />
                </div>
            </div>
            <div className='instructor-container'>
                <h2>Meet Your Instructors</h2>
                <p>Our faculty are all professionally qualified and have rich industry experience, essential for giving a practical context to concepts</p>
                <div className='instructor-cards'>
                    {/* These Cards few css all same like testimonial cards.  */}
                    <div>
                        <div className='testinomial-cards'>
                            <p className='testinomial-name'>Amar Gupta</p>
                            <div className='img'>
                                <img src={photo} alt="" />
                            </div>
                            <ul>
                                <li>Has completed all three CFA levels in first attempt</li>
                                <li>4+ Years Experience Training For Financial Modeling and Independent Trader</li>
                            </ul>
                            <p>CFA, Commodity Trader</p>
                            <p>Morgan Stanley</p>
                        </div>
                        <div className='testinomial-cards'>
                            <p className='testinomial-name'>Nayan Tank</p>
                            <div className='img'>
                                <img src={photo} alt="" />
                            </div>
                            <ul>
                                <li>4+ years of Experience in- Risk Management & Valuation</li>
                                <li>Ex BNY Mellon Risk Analyst</li>
                                <li>Trained 1000+ Students & Independent CA in New Delhi</li>
                            </ul>
                            <p>NITIE MBA, CA</p>
                            <p>Barclays</p>
                        </div>
                        <div className='testinomial-cards'>
                            <p className='testinomial-name'>Amar Gupta</p>
                            <div className='img'>
                                <img src={photo} alt="" />
                            </div>
                            <ul>
                                <li>10+ Year Experience Fund Manager, Product Management & Entrepreneurship</li>
                                <li>Trained 10000+ students in premiere institution </li>
                                <li>CFA Charter holder since 2020 Ex Co Founder A.K Research</li>
                            </ul>
                            <p>CFA,IIM-MBA, B-Tech</p>
                            <p>JP Morgan & Chase</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
