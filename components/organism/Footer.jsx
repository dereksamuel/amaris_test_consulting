import Text from '../atoms/Text'

import Check from '../icons/Check'
import Lock from '../icons/Lock'
import Support from '../icons/Support'
import Tweet from '../icons/Tweet'
import Facebook from '../icons/Facebook'
import Wifi from '../icons/Wifi'
import Instagram from '../icons/Instagram'

export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <ul className='improvements'>
          <li className='item'>
            <Check></Check>
            <Text>30 day <strong>money back guarantee</strong></Text>
          </li>
          <li className='item'>
            <Support></Support>
            <Text><strong>Support</strong> teams across the world</Text>
          </li>
          <li className='item'>
            <Lock></Lock>
            <Text><strong>Safe & Secure</strong> online payment</Text>
          </li>
        </ul>
        <picture>
          <img src='/images/WhiteLogo.png' className='WhiteLogo' alt='WhiteLogo' />
        </picture>
        <ul className="link_container">
          <li>
            <p className="title">Who we Are</p>
            <a className='description'>About</a>
            <a className='description'>Team</a>
            <a className='description'>Work With Us</a>
          </li>
          <li>
            <p className="title">Woocommerce</p>
            <a className='description'>Features</a>
            <a className='description'>Payments</a>
            <a className='description'>Marketing</a>
            <a className='description'>Shipping</a>
            <a className='description'>Extension Store</a>
            <a className='description'>eCommerce blog</a>
            <a className='description'>Development blog</a>
            <a className='description'>Ideas board</a>
            <a className='description'>Mobile App</a>
            <a className='description'>Community</a>
            <a className='description'>Style Guide</a>
            <a className='description'>Email Newsletter</a>
          </li>
          <li>
            <p className="title">Other products</p>
            <a className='description'>AbStorefrontout</a>
            <a className='description'>WooSlider</a>
            <a className='description'>Sensei</a>
            <a className='description'>Sensei Extensions</a>
          </li>
          <li>
            <p className="title">Support</p>
            <a className='description'>Documentation</a>
            <a className='description'>Customizations</a>
            <a className='description'>Support Policy</a>
            <a className='description'>Contact</a>
            <a className='description'>COVID-19 Resources</a>
            <a className='description'>Privacy Notice for</a>
            <a className='description'>California Users</a>
          </li>
          <li>
            <p className="title">We recommend</p>
            <a className='description'>WooExperts</a>
            <a className='description'>Hosting Solutions</a>
            <a className='description'>Pre-sales FAQ</a>
            <a className='description'>Success Stories</a>
            <a className='description'>Design Feedback Group</a>
          </li>
        </ul>
      </footer>
      <div className="footer_white">
        <div className="icons">
          <Tweet></Tweet>
          <Facebook></Facebook>
          <Wifi></Wifi>
          <Instagram></Instagram>
        </div>
        <Text className='black'>COPYRIGHT AMARIS 2022 - TERMS & CONDITIONS  PRIVACY POLICY</Text>
        <picture>
          <img src="/images/Automatic.svg" alt="Automatic" className='Automatic' />
        </picture>
      </div>
    </>
  )
}
