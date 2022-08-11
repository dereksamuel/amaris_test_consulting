import { useState } from 'react'
import Image from 'next/image'

// components
import Button from '../atoms/Button'
import LinkNext from 'next/link'
import Link from '../atoms/Link'
import SearchIcon from '../icons/SearchIcon'

export default function Header() {
  const [state, setState] = useState({ showMenuHamburger: false })
  const links = [
    {
      id: '12345465',
      name: 'Sell',
      to: '/sell-component'
    },
    {
      id: '123454675',
      name: 'Marketplace',
      to: '/market-place'
    },
    {
      id: '123845465',
      name: 'Community',
      to: '/community'
    },
    {
      id: '123459465',
      name: 'Analyze',
      to: '/analyze'
    },
    {
      id: '1234545465',
      name: 'Downloads',
      to: '/downloads'
    }
  ]

  const onTogleMenu = () => {
    setState({
      ...state,
      showMenuHamburger: !state.showMenuHamburger
    })
  }

  return (
    <>
      <header className='menu'>
        <Image
          src='/images/Logo.png'
          alt='Logo'
          width='169px'
          height='34.08px'
        ></Image>
        <div className="links_middle">
          {links?.map(link => (
            <Link onClick={console.log} key={link.id} className='link'>{link.name}</Link>
          ))}
        </div>
        <div className="latest_links">
          <LinkNext href='/admin'>
            <a className="link">
              Log In
            </a>
          </LinkNext>
          <Button className='square primary'>Get Started</Button>
          <Link className="link-reverse"><SearchIcon /></Link>
        </div>
      </header>
      <header className='menu m-hamburger'>
        {
          state.showMenuHamburger && (
            <div className="showableLinks">
              <div className="links_middle">
                {links?.map(link => (
                  <Link onClick={console.log} key={link.id} className='link'>{link.name}</Link>
                ))}
              </div>
              <div className="latest_links">
                <LinkNext href='/admin'>
                  <a className="link">
                    Log In
                  </a>
                </LinkNext>
                <Link className="link-reverse"><p>Buscar</p><SearchIcon /></Link>
                <Button className='square primary'>Get Started</Button>
              </div>
            </div>
          )
        }
        <Image
          src='/images/Logo.png'
          alt='Logo'
          width='169px'
          height='34.08px'
        ></Image>
        <div className="latest_links">
          {/* <Link className="link">Log In</Link>
          <Button className='square primary'>Get Started</Button>
          <Link className="link-reverse"><SearchIcon /></Link> */}
          <button className={`${state.showMenuHamburger && 'whiteHm'} hamburgerMenu`} onClick={onTogleMenu}>
            {state.showMenuHamburger ? (
              <Image
                src='/images/cerrar.png'
                alt='Logo'
                width='15px'
                height='15px'
              ></Image>
            ) : (
              <Image
                src='/images/hamburger.png'
                alt='Logo'
                width='30px'
                height='30px'
              ></Image>
            ) }
          </button>
        </div>
      </header>
    </>
  )
}
