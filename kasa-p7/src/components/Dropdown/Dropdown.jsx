import React, { useState } from 'react'
import openSvg from '../../assets/openClosed.svg'
import closeSvg from '../../assets/Close.svg'

import './Dropdown.css'

export default function Dropdown(props) {
   //isOpen est ce qu'on va return(), setIsOpen est la modification de isOpen
   //useState se modifie avec la deuxième valeur
   //isOpen = première valeur = conditionel
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className='collapsible'>
         <div onClick={() => setIsOpen(!isOpen)} className='header'>
            {props.title}
            <img
               src={isOpen ? closeSvg : openSvg}
               alt='flèche pour fermer'
            ></img>
         </div>
         {isOpen ? <div className='content'>{props.children}</div> : <></>}
      </div>
   )
}
