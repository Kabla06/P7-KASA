import './styles/App.css'

import Header from './components/Header/Header'
import Accueil from './components/Accueil/Accueil'
import Footer from './components/Footer/Footer'
import ImageBanniere from './components/ImageBanniere/ImageBann'
import React from 'react'

export default function App() {
   return (
      <div>
         <React.StrictMode>
            <Header />
            <ImageBanniere />
            <div className='content-container'>
               <Accueil />
            </div>
            <Footer />
         </React.StrictMode>
      </div>
   )
}
