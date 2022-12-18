import './img-container.css'

import { useLocation } from 'react-router-dom'

import ImageBanner1 from '../../assets/banner-back.png'
import ImageBanner2 from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'

export default function ImageBanniere() {
   const loc = useLocation()
   console.log(loc.pathname)

   let img = ImageBanner1
   if (loc.pathname === '/about-us') {
      img = ImageBanner2
   }

   return (
      <div className='img-container'>
         <h2 className='text-bann'>Chez vous, partout et ailleurs</h2>
         <img className='img-img' src={img} alt='Bannière' />
      </div>
   )
}
