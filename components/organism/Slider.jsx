import SubTitle from '../atoms/SubTitle'
import Carrousel from './Carrousel'

export default function Slider({ carrousel }) {
  return (
    <div className="slider">
      <SubTitle className='large trusted black'>Trusted by Agencies & Store Owners</SubTitle>
      <div className="dots1Slider"></div>
      <div className="dots2Slider"></div>
      <Carrousel carrousel={carrousel}></Carrousel>
      <picture className='people_images'>
        <img className='left' src="/images/leftImagesSlider.svg" alt="leftImagesSlider" />
        <img className='right' src="/images/rightImagesSlider.svg" alt="rightImagesSlider" />
      </picture>
    </div>
  )
}
