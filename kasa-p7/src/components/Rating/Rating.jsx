import './Rating.css'

import emptyStar from '../../assets/starVector.svg'
import fullStar from '../../assets/fullStar.svg'

export default function Rating({ rate }) {
   // valeurs de base (cours sur conditions)
   const rateArray = [1, 2, 3, 4, 5]
   return (
      <div className='container-stars'>
         {rateArray.map((r) =>
            // ternaire = ( condition ? vrai : faux )
            rate >= r ? (
               <img key={r.toString()} className='star' src={fullStar} alt='' />
            ) : (
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

// créé un tableau de 1 à 5

// map() sur ce tableau
// => créé un nouveau tableau avec les résultats de l'appel d'une fonction
// sur chaque élément du premier tableau

// le map() dit quoi ?
// En gros chaque note du premier tableau devient r

// si rate (donc la note fournie dans Details.jsx == le JSON)
// est plus grand ou égal à r (donc l'élément du tableau dans la fonction) => de 1 à 5
// alors met une étoile full, sinon met une étoile vide

// par ex : note de 4 donne

// note est plus grande ou égale à 4 (tout ça = fullstar, le reste emptystar)
