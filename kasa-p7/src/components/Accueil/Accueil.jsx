import './Accueil.css'

import logements from '../../datas/logements.json'
import Card from '../Cards/Card'

import { Link } from 'react-router-dom'

export default function Accueil() {
   return (
      <div className='container-background'>
         <ul className='container-chelou-ul'>
            {logements.map(({ id, title, cover }) => (
               <Link to={`/fiche-logement/${id}`} key={id}>
                  <Card cover={cover} title={title} />
               </Link>
            ))}
         </ul>
      </div>
   )
}