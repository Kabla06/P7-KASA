import './Card.css'

export default function Card({ title, cover }) {
   return (
      <li className='flex-fiche'>
            <div className='shadow'>
               <img
                  className='img-cover-banner'
                  src={cover}
                  alt={`${title} cover`}
               />
               <p className='img-text'>{title}</p>
            </div>
      </li>
   )
}
