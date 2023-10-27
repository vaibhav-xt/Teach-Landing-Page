import './Nav.css'
export default function Nav() {
    return (
        <nav className='nav'>
            <div className='nav-left'>
                <h1>Future Edge</h1>
                <ul>
                    <li><a href="/">Courses</a></li>
                    <li><a href="/">Testimonials</a></li>
                    <li><a href="/">WhyFutureEdge</a></li>
                    <li><a href="/">Mentors</a></li>
                    <li><a href="/">Alumni</a></li>
                </ul>
            </div>
            <ul className='nav-right'>
                <li><a href="/">Singin</a></li>
                <li><a href="/">Sign up</a></li>
            </ul>
        </nav>
    )
}
