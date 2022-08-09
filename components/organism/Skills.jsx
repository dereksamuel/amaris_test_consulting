import SubTitle from '../atoms/SubTitle'
import Text from '../atoms/Text'
import Link from '../atoms/Link'

export default function Skills() {
  return <div className='Skills'>
    <SubTitle className='large ecomerce black'>Your eCommerce made simple</SubTitle>
    <ul className="cards">
      <li className='card one'>
        <picture>
          <img className='img' src='/images/pay_images.svg' alt='pay_images' />
          <img className='pay_image_box' src="/images/pay_image_box.svg" alt="pay_images_box" />
          <figcaption>
            <SubTitle className='small black'>All You Need to Start</SubTitle>
            <Text className='text_card'>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</Text>
            <Link className='primary'>Ecommerce for Wordpress ›</Link>
          </figcaption>
        </picture>
      </li>
      <li className='card two'>
        <picture>
          <img className='img' src='/images/social_images.svg' alt='social_images' />
          <figcaption>
            <SubTitle className='small black'>Customize and Extend</SubTitle>
            <Text className='text_card'>From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.</Text>
            <Link className='primary'>Browse Extensions ›</Link>
          </figcaption>
        </picture>
      </li>
      <li className='card three'>
        <picture>
          <img className='img' src='/images/team_images.svg' alt='team_images' />
          <figcaption>
            <SubTitle className='small black'>Active Community</SubTitle>
            <Text className='text_card'>WooCommerce is one of the fastest-growing eCommerce communities. </Text>
            <Link className='primary'>Check our Forums ›</Link>
          </figcaption>
        </picture>
      </li>
    </ul>
  </div>
}
