import Glider from 'glider-js'
import { useEffect } from 'react'

export default function useGlider(gliderElement) {
  useEffect(() => {
    new Glider(document.querySelector(gliderElement), {
      arrows: {
        slidesToShow: 1,
        slidesToScroll: 2,
        draggable: true,
        prev: '.prev',
        // may also pass element directly
        next: '.next'
      },
      'glider-loaded': console.log
    })

    document.addEventListener('glider-loaded', console.log)
  }, [gliderElement])
}
