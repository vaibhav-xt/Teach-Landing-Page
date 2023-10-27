import './AlumniRow.css'
import logo_1 from '../../assets/logo_1.png'
import logo_2 from '../../assets/logo_2.png'
import logo_3 from '../../assets/logo_3.png'
import logo_4 from '../../assets/logo_4.png'
import logo_5 from '../../assets/logo_5.png'
import logo_6 from '../../assets/logo_6.png'
import logo_7 from '../../assets/logo_7.png'

export default function AlumniRow() {
    return (
        <section className='alumni-row'>
            <div className='section-wrapper alumni-row-container'>
                <h2>Where FutureEdge Alumni Work</h2>
                <p>Our Alumni are all placed in reputed firms in high positions due to the knowledge, skills and placement assistance gained from our courses.</p>
                <div>
                    <img src={logo_1} alt="" />
                    <img src={logo_2} alt="" />
                    <img src={logo_3} alt="" />
                    <img src={logo_5} alt="" />
                    <img src={logo_6} alt="" />
                    <img src={logo_7} alt="" />
                    <img src={logo_4} alt="" />
                </div>
            </div>
        </section>
    )
}
