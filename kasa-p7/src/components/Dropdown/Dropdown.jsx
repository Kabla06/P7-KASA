import React, { useState } from 'react'
import openSvg from '../../assets/openClosed.svg'
import closeSvg from '../../assets/Close.svg'

import './Dropdown.css'

export default function Dropdown(props) {
   const [isOpen, setIsOpen] = useState(false)

   return isOpen ? (
      <div className='collapsible'>
         <div onClick={() => setIsOpen(false)} className='header'>
            {props.title} <img src={openSvg} alt='flèche pour fermer'></img>
         </div>
         <div className='content'>{props.children}</div>
      </div>
   ) : (
      <div className='collapsible'>
         <div onClick={() => setIsOpen(true)} className='header'>
            {props.title} <img src={closeSvg} alt='flèche pour fermer'></img>
         </div>
      </div>
   )
}
