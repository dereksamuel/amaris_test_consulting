/* eslint-disable react/no-unescaped-entities */
import useGlider from '../../hooks/useGlider'
import Arrow from '../icons/Arrow'
import ArrowLeft from '../icons/ArrowLeft'
import Semicolons from '../icons/Semicolons'

export default function Carrousel() {
  useGlider('.carrousel')

  return (
    <div className='carrousel_container'>
      <ul className="carrousel">
        <li className="item">
          <Semicolons className='semicolons'></Semicolons>
          <h4 className='description'>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</h4>
        </li>
        <li className="item">
          <Semicolons className='semicolons'></Semicolons>
          <h4 className='description'>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</h4>
        </li>
      </ul>
      <div className="controler">
        <div className="prev">
          <ArrowLeft />
        </div>
        <div className="next">
          <Arrow />
        </div>
      </div>
    </div>
  )
}
