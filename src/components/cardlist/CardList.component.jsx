import CardComponent from '../card/Card.component'
import './card-list.styles.css'

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map(monster => (
      <CardComponent monster={monster} key={monster.id} />
    ))}
  </div>
)

export default CardList
