import logo from '../../assets/LOGO.svg'

import './Footer.css'

export default function Footer() {
   return (
      <>
         <footer className='footer'>
            <div className='footer-logo-div'>
               <img className='footer-logo-white' src={logo} alt='logo' />
            </div>
            <div>
               <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
            </div>
         </footer>
      </>
   )
}