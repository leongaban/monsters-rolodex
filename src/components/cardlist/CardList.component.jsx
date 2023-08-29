import { Component } from 'react'

import CardComponent from '../card/Card.component'
import './card-list.styles.css'

class CardList extends Component {
  render() {
    console.log(this.props.monsters)
    console.log('render from CardList')
    const { monsters } = this.props

    return (
      <div className='card-list'>
        {monsters.map(monster => (
          <CardComponent monster={monster} key={monster.id} />
        ))}
      </div>
    )
  }
}

export default CardList
