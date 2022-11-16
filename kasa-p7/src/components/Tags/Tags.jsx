import './Tags.css'

import { useParams } from 'react-router-dom'
import logements from '../../datas/logements.json'

export default function Tags() {
   const params = useParams()
   let monLogement = logements.filter((l) => l.id === params.id)[0]
   let tagsLogement = monLogement.tags

   const listItems = tagsLogement.map((tags, id) => <li key={id}>{tags}</li>)

   return <ul className='block-tags'>{listItems}</ul>
}
