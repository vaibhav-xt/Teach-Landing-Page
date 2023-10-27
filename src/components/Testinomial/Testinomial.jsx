import './Testinomial.css'
import photo from '../../assets/testPhoto.png'

export default function Testinomial() {
    return (
        <section className='testimonial'>
            <div className='section-wrapper testinomial-container'>
                <h2>What our Learners Say</h2>
                <p>100+ thousand people have already joined FutureEdge</p>
                <div>
                    <div className='testinomial-cards'>
                        <p className='testinomial-name'>Abhishek Gupta</p>
                        <div className='img'>
                            <img src={photo} alt="" />
                        </div>
                        <p className='testinomial-text'>
                            “This course has significantly enhanced my professional life,particularly in terms of data organization. Previously, it would take me hours to segregate data, but after completing the course, the process has become much more streamlined. Implementing this course effectively can give you a competitive edge.”
                        </p>
                        <p>Currency Research <br /> Analyst <br /> Barclays</p>
                    </div>
                    <div className='testinomial-cards'>
                        <p className='testinomial-name'>Abhishek Gupta</p>
                        <div className='img'>
                            <img src={photo} alt="" />
                        </div>
                        <p className='testinomial-text'>
                            “This course has significantly enhanced my professional life,particularly in terms of data organization. Previously, it would take me hours to segregate data, but after completing the course, the process has become much more streamlined. Implementing this course effectively can give you a competitive edge.”
                        </p>
                        <p>Currency Research <br /> Analyst <br /> Barclays</p>
                    </div>
                    <div className='testinomial-cards'>
                        <p className='testinomial-name'>Abhishek Gupta</p>
                        <div className='img'>
                            <img src={photo} alt="" />
                        </div>
                        <p className='testinomial-text'>
                            “This course has significantly enhanced my professional life,particularly in terms of data organization. Previously, it would take me hours to segregate data, but after completing the course, the process has become much more streamlined. Implementing this course effectively can give you a competitive edge.”
                        </p>
                        <p>Currency Research <br /> Analyst <br /> Barclays</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
