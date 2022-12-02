import './Carousel.css'
import forward from '../../assets/forward24px.svg'
import backward from '../../assets/backward24px.svg'

import React, { useState } from 'react'

export default function Carousel({ pictures }) {
   // let currentIndex = 0
   const [sliderData, setSliderData] = useState(pictures[0])
   const [indexData, setIndexData] = useState(0)
   const previous = () => {
      // si premiere img alors
      if (indexData === 0) {
         // on passe a la derniere (length -1 pour aller au bon index)
         setIndexData(pictures.length - 1)
      } else {
         setIndexData(indexData - 1)
      }
      setSliderData(pictures[indexData])
   }
   const next = () => {
      if (indexData === pictures.length - 1) {
         // on passe a la derniere (length -1 pour aller au bon index)
         setIndexData(0)
      } else {
         setIndexData(indexData + 1)
      }
      setSliderData(pictures[indexData])
   }
   return (
      <div className='swipe-picture-container'>
         <div>
            <img className='swipe-pictures' src={sliderData} alt='' />
         </div>
         <button onClick={previous} className='backward'>
            <img src={backward} alt='' />
         </button>
         <button onClick={next} className='forward'>
            <img src={forward} alt='' />
         </button>
      </div>
   )
}
