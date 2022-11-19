import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
import openSvg from '../../assets/openClosed.svg'
import closeSvg from '../../assets/Close.svg'

import './Dropdown.css'

export default function Dropdown({ title, text }) {
   const [isExpanded, setExpanded] = useState(true)
   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

   function handleOnClick() {
      setExpanded((isExpanded) => !isExpanded)
   }

   return (
      <div className='collapsible'>
         <div
            className='header'
            {...getToggleProps({ onClick: handleOnClick })}
         >
            {title}
            {isExpanded ? (
               <img src={closeSvg} alt='' />
            ) : (
               <img src={openSvg} alt='' />
            )}
         </div>
         <div {...getCollapseProps()}>
            <div className='content'>{text}</div>
         </div>
      </div>
   )
}
