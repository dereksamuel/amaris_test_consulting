import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import CarrouselData from '../components/organism/CarrouselData'
import getCarrousel from '../utils/getCarrousel'

const prisma = new PrismaClient()

export default function Admin({ carrousel }) {
  return (
    <>
      <header className="menu admin">
        <Link href='/'>
          <Image
            src='/images/Logo.png'
            alt="Logo"
            width='169px'
            height='34.08px'
          />
        </Link>
      </header>
      <div className="panel">
        <CarrouselData carrousel={carrousel}></CarrouselData>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const props = await getCarrousel(prisma)

  return { props }
}
