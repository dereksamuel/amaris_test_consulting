/* eslint-disable react/no-unescaped-entities */
import useGlider from '../../hooks/useGlider'
import Arrow from '../icons/Arrow'
import ArrowLeft from '../icons/ArrowLeft'
import Semicolons from '../icons/Semicolons'

export default function Carrousel({ carrousel }) {
  useGlider('.carrousel')

  return (
    <div className='carrousel_container'>
      <picture>
        <img className='carrouselConsecutive' src='/images/carrouselConsecutive.svg' alt='carrouselConsecutive' />
      </picture>
      <ul className='carrousel'>
        {carrousel.data?.map(item => (
          <li className='item' key={item.id}>
            <picture className={`${!item.url && 'none'} marco`}>
              <img className='image' src={item.url} alt={item.main_message} />
            </picture>
            <Semicolons className={`${item.url && 'none'} semicolons`}></Semicolons>
            <h4 className='description'>{item.main_message}</h4>
          </li>
        ))}
      </ul>
      <div className='controler'>
        <div className='prev'>
          <ArrowLeft />
        </div>
        <div className='next'>
          <Arrow />
        </div>
      </div>
    </div>
  )
}
