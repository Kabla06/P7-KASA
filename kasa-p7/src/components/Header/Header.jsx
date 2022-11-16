import logo from '../../assets/LOGO.svg'

import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
   return (
      <div className='header-top'>
         <div className='row'>
            <img src={logo} alt='logo' />
            <nav className='header-top-links-group'>
               <Link to='/'>Accueil</Link>
               <Link to='/about-us'>A Propos</Link>
            </nav>
         </div>
      </div>
   )
}
