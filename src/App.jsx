import Nav from './components/Navbar/Nav'
import Hero from './components/Hero/Hero'
import Courses from './components/Courses/Courses'
import UltimateCourse from './components/UltimateCourse/UltimateCourse'
import Testinomial from './components/Testinomial/Testinomial'
import Features from './components/Features/Features'
import AlumniRow from './components/AlumniRow/AlumniRow'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Hero />
      <Courses />
      <UltimateCourse />
      <Testinomial />
      <Features />
      <AlumniRow />
      <Footer />
    </div>
  )
}
