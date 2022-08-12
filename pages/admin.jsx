import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import CarrouselData from '../components/organism/CarrouselData'
import UsersData from '../components/organism/UsersData'
import Text from '../components/atoms/Text'
import getCarrousel from '../utils/getCarrousel'
import getUser from '../utils/getUser'
import useProfile from '../hooks/useProfile'

const prisma = new PrismaClient()

export default function Admin({ carrousel, userData }) {
  const user = useProfile()

  useEffect(() => {
    const onUserData = () => {
      document.querySelectorAll('.users_data button').forEach($button => { $button.disabled = true })
    }

    if (user?.role === 'reader') {
      document.querySelectorAll('input').forEach($input => { $input.disabled = true })
      document.querySelectorAll('.carrouselData button').forEach($button => { $button.disabled = true })

      onUserData()
    }

    if (user?.role === 'editor') {
      document.querySelectorAll('.users_data input').forEach($input => { $input.disabled = true })
      onUserData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.role])

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
        <div className="text_container">
          <Text><strong>Email:</strong> {user?.email}</Text>
          <Text><strong>Role:</strong> {user?.role}</Text>
        </div>
      </header>
      <div className={`panel ${user?.role === 'admin' && 'users_mode'}`}>
        <CarrouselData carrousel={carrousel}></CarrouselData>
        <UsersData userData={userData}></UsersData>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const props = await getCarrousel(prisma)
  const propsUser = await getUser(prisma)

  return {
    props: {
      ...props,
      ...propsUser
    }
  }
}
