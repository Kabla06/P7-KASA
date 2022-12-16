import './styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import About from './pages/About/About.jsx'
import Error from './pages/Error/Error.jsx'
import Fiche from './pages/Fiches/FicheLogement.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<App />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/fiche-logement/:id' element={<Fiche />} />
            <Route path='/*' element={<Error />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
)
