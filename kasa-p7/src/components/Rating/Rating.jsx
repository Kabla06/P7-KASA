import './Rating.css'

import emptyStar from '../../assets/starVector.svg'
import fullStar from '../../assets/fullStar.svg'

export default function Rating({ rate }) {
   // valeurs de base (cours sur conditions)
   const rateArray = [1, 2, 3, 4, 5]
   return (
      <div className='container-stars'>
         {rateArray.map((r) =>
            //  ternaire = gros if / else
            // ternaire = ( condition ? vrai : faux )
            rate >= r ? ( // vrai = rate(donc mon rating === valeur dans rateArray, du coup étoile colorée)
               <img key={r.toString()} className='star' src={fullStar} alt='' />
            ) : (
               // puis faux, car le reste après ma valeur vrai (rate = rating) est différent, donc vide
               <img
                  key={r.toString()}
                  className='star'
                  src={emptyStar}
                  alt=''
               />
            )
         )}
      </div>
   )
}
