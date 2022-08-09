import Image from 'next/image'

// components
import Button from '../atoms/Button'
import Link from '../atoms/Link'
import SearchIcon from '../icons/SearchIcon';

export default function Header() {
  const links = [
    {
      id: "12345465",
      name: "Sell",
      to: "/sell-component"
    },
    {
      id: "123454675",
      name: "Marketplace",
      to: "/market-place"
    },
    {
      id: "123845465",
      name: "Community",
      to: "/community"
    },
    {
      id: "123459465",
      name: "Analyze",
      to: "/analyze"
    },
    {
      id: "1234545465",
      name: "Downloads",
      to: "/downloads"
    }
  ];

  return (
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
        <Link className="link">Log In</Link>
        <Button className='square primary'>Get Started</Button>
        <Link className="link-reverse"><SearchIcon /></Link>
      </div>
    </header>
  )
}
