import './Fiches.css'

import { useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'
import Details from '../../components/Details/Details'
import logements from '../../datas/logements.json'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function Fiche() {
   const params = useParams()
   let monLogement = logements.filter((l) => l.id === params.id)[0]

   const titleDescription = [
      {
         id: `44444dsqsd`,
         title: 'Description',
         description: monLogement.description,
      },
      {
         id: `88888dsqsd`,
         title: 'Equipement',
         description: monLogement.equipments,
      },
   ]

   let hostName = monLogement.host

   return (
      <div>
         <Header />
         <div className='content-container'>
            <Carousel pictures={monLogement.pictures} />
            <Details
               title={monLogement.title}
               location={monLogement.location}
               host={hostName.name}
               hostpic={hostName.picture}
            />
            <div className='container-dropdown-fiches'>
               {titleDescription.map(({ id, title, description }) => (
                  <Dropdown key={id} title={title} text={description} />
               ))}
            </div>
         </div>
         <Footer />
      </div>
   )
}
