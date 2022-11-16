import Header from '../Header/Header'
import { Link } from 'react-router-dom'

import './Error.css'

export default function Error() {
   return (
      <div>
         <Header />
         <div className='body-container'>
            <h1 className='error-code'>404</h1>
            <p className='message-err'>Oups! La page que vous demandez n'existe pas.</p>
            <nav>
               <Link className='link-to-home' to='/'>Retourner sur la page d’accueil</Link>
            </nav>
         </div>
      </div>
   )
}
