import SubTitle from '../atoms/SubTitle'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import People from '../icons/People'

export default function Support() {
  return (
    <div className="support">
      <SubTitle className='large supported black'>Supported by real people</SubTitle>
      <Text>Our team of Happiness Engineers works remotely from 68 countries providing customers support across multiple time zones.</Text>
      <div className="alert_container">
        <picture className="people_container">
          <img src="/images/people.png" alt="people" />
        </picture>
        <div className="alert">
          <h4 className='message'>
            WooCommerce - the <strong>most customizable eCommerce platform</strong> for building
            <strong> your online business</strong>.</h4>
          <Button className='button primary ovalo lg outline'>GET STARTED</Button>
          <picture>
            <div className="circle middle" alt='middle circle'></div>
          </picture>
        </div>
      </div>
    </div>
  )
}
