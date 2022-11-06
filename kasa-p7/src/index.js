import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './pages/AccueilApp'
import { BrowserRouter as Router} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Accueil />
    </Router>
  </React.StrictMode>
)
