// organism
import AboutUs from '../components/organism/AboutUs'
import Header from '../components/organism/Header'
import Main from '../components/organism/Main'
import Skills from '../components/organism/Skills'
import Slider from '../components/organism/Slider'

export default function LandPage() {
  return (
    <div>
      <Header />
      <Main />
      <Skills />
      <AboutUs />
      <Slider />
    </div>
  )
}
