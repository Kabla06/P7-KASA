import './Carousel.css'
import forward from '../../assets/forward24px.svg'
import backward from '../../assets/backward24px.svg'

import React, { useState } from 'react'

export default function Carousel({ pictures }) {
   const [sliderData, setSliderData] = useState(pictures[0])
   const [indexData, setIndexData] = useState(0)

   const lengthOfPictures = pictures.length
   const previous = () => {
      // si on est au premier index
      if (indexData === 0) {
         // si on appuie sur previous alors qu'on est au premier index
         // on passe alors au dernier index (loop)
         setIndexData(lengthOfPictures - 1)
         setSliderData(pictures[lengthOfPictures - 1])
      } else {
         setIndexData(indexData - 1)
         setSliderData(pictures[indexData - 1])
         // Sinon quand on fait prev et qu'on ne met que indexData, on saute un index, donc on fait +1
         // pour ne pas avoir de décalage
      }
   }
   const next = () => {
      if (indexData === lengthOfPictures - 1) {
         // Si on est au dernier index et qu'on appuie sur next
         // on revient au premier index
         setIndexData(0)
         setSliderData(pictures[0])
      } else {
         setIndexData(indexData + 1)
         setSliderData(pictures[indexData + 1])
      }
   }

   return (
      <div className='swipe-picture-container'>
         <>
            <img className='swipe-pictures' src={sliderData} alt='' />
         </>
         <button onClick={previous} className='backward'>
            <img src={backward} alt='' />
         </button>
         <button onClick={next} className='forward'>
            <img src={forward} alt='' />
         </button>
         <div className='pagination'>
            {indexData + 1} / {lengthOfPictures}
         </div>
      </div>
   )
}
