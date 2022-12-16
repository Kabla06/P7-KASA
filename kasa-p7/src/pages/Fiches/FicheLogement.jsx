import './Fiches.css'

import { useParams, Navigate } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'
import Details from '../../components/Details/Details'
import logements from '../../datas/logements.json'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function Fiche() {
   const params = useParams()

   let monLogement = logements.filter((l) => l.id === params.id)[0]

   if (monLogement === undefined) {
      return <Navigate to='/404' />
   }

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

   let equipments = titleDescription[1].description
   let description = titleDescription[0].description
   let hostName = monLogement.host

   return (
      <>
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
               <Dropdown title='Description'>{description}</Dropdown>
               <Dropdown title='Equipement'>
                  <ul>
                     {/* Ici, return implicite car paranthèses après =>. */}
                     {/* Si on remplace par des accolades ça donne : */}

                     {/* {equipments.map((el) => {
                        return <li>{el}</li>
                     })} */}
                     {equipments.map((el, index) => (
                        <li key={index}>{el}</li>
                     ))}
                  </ul>
               </Dropdown>
            </div>
         </div>
         <Footer />
      </>
   )
}
