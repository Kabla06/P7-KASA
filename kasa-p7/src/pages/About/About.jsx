import './About.css'

import Header from '../../components/Header/Header'
import ImageBanniere from '../../components/ImageBanniere/ImageBann'
import Footer from '../../components/Footer/Footer'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function About() {
   const description = [
      {
         id: `123456azer`,
         title: `Fiabilité`,
         text: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`,
      },
      {
         id: `660054sqyf`,
         title: `Respect`,
         text: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`,
      },
      {
         id: `125874yull`,
         title: `Service`,
         text: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`,
      },
      {
         id: `558944ftgu`,
         title: `Sécurité`,
         text: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
      },
   ]

   return (
      <div>
         <Header />
         <ImageBanniere />
         <div className='content-container'>
            {description.map(({ id, title, text }) => (
               <Dropdown key={id} title={title}>
                  <p>{text}</p>
               </Dropdown>
            ))}
         </div>
         <Footer />
      </div>
   )
}
