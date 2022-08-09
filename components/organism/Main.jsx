import Button from '../atoms/Button'
import Link from '../atoms/Link'
import Text from '../atoms/Text'

export default function Main() {
  return <main className='main'>
    <div className='w_background'></div>
    <picture>
      <img
        src='/images/hero-image.png'
        width={838.33}
        height={829.14}
        className='hero_image'
        alt='heroImage'
      />
    </picture>
    <div className="hero-message">
      <h2 className='title'>Building exactly the eCommerce website you want.</h2>
      <Text>WooCommerce is a customizable, open-source eCommerce platform built on WordPress.</Text>
      <Text>Get started quickly and make your way.</Text>
      <div className="button-order">
        <Button className='button primary ovalo lg'>Start a New Store</Button>
        <Text>or <Link className='primary'>Customize & Extend ›</Link></Text>
      </div>
    </div>
  </main>
}
