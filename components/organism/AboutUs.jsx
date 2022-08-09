import SubTitle from '../atoms/SubTitle'
import Text from '../atoms/Text'
import Button from '../atoms/Button'

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="purple_background">
        <div className="background_woom"></div>
        <div className="dots1"></div>
        <div className="dots2"></div>
        <section className="section-development">
          <picture className="image-container">
            <div className="circle sm"></div>
            <div className="circle lg"></div>
            <img src="/images/developerGirl.png" alt="developerGirl" />
          </picture>
          <div className="text-container">
            <SubTitle className='section'>Develop Without Limits</SubTitle>
            <Text>WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</Text>
            <Button className='secondary ovalo md'>Read the Documentation</Button>
          </div>
        </section>

        <section className="section-development reverse">
          <picture className="image-container">
            <div className="circle sm right"></div>
            <div className="circle md"></div>
            <img src="/images/teamDevs.png" alt="teamDevs" />
          </picture>
          <div className="text-container">
            <SubTitle className='section second-subtitle'>Know our</SubTitle>
            <SubTitle className='section second-subtitle'>Global Community</SubTitle>
            <Text>WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</Text>
            <Button className='secondary ovalo md'>Read the Documentation</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
