import './Fiches.css'

import { useParams, useNavigate } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'
import Details from '../../components/Details/Details'
import logements from '../../datas/logements.json'
import Dropdown from '../../components/Dropdown/Dropdown'
import { useEffect } from 'react'

export default function Fiche() {
   const navigate = useNavigate()
   const params = useParams()
   console.log(params)
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

   let testCool = titleDescription[1].description
   // console.log(titleDescription[1].description)
   let hostName = monLogement.host

   useEffect(() => {
      if (logements.id !== params) {
         navigate('/about-us')
      }
   })

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
               <Dropdown title='Description'>
                  {titleDescription[0].description}
               </Dropdown>
               <Dropdown title='Equipement'>{testCool}</Dropdown>
            </div>
         </div>
         <Footer />
      </div>
   )
}
