import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import CarrouselData from '../components/organism/CarrouselData'
import Text from '../components/atoms/Text'
import getCarrousel from '../utils/getCarrousel'
import useProfile from '../hooks/useProfile'

const prisma = new PrismaClient()

export default function Admin({ carrousel }) {
  const user = useProfile()

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
        <p>{user?.email}</p>
        <Text>{user?.role}</Text>
      </header>
      <div className="panel">
        <CarrouselData carrousel={carrousel}></CarrouselData>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const props = await getCarrousel(prisma)

  return {
    props
  }
}
