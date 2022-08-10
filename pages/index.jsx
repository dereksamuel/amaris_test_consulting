// organism
import AboutUs from '../components/organism/AboutUs'
import Footer from '../components/organism/Footer'
import Header from '../components/organism/Header'
import Main from '../components/organism/Main'
import Skills from '../components/organism/Skills'
import Slider from '../components/organism/Slider'
import Support from '../components/organism/Support'

export default function LandPage() {
  return (
    <>
      <Header />
      <Main />
      <Skills />
      <AboutUs />
      <Slider />
      <Support />
      <Footer />
    </>
  )
}
