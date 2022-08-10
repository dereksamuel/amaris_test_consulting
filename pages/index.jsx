// organism
import { PrismaClient } from '@prisma/client'
import AboutUs from '../components/organism/AboutUs'
import Footer from '../components/organism/Footer'
import Header from '../components/organism/Header'
import Main from '../components/organism/Main'
import Skills from '../components/organism/Skills'
import Slider from '../components/organism/Slider'
import Support from '../components/organism/Support'
import getCarrousel from '../utils/getCarrousel'

const prisma = new PrismaClient()

export default function LandPage({ carrousel }) {
  return (
    <>
      <Header />
      <Main />
      <Skills />
      <AboutUs />
      <Slider carrousel={carrousel} />
      <Support />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const props = await getCarrousel(prisma)

  return { props }
}
