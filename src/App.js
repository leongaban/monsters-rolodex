import { Component } from 'react'

import CardList from './components/cardlist/CardList.component'
import SearchBox from './components/searchbox/SearchBox.component'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users =>
        this.setState(() => {
          return { monsters: users }
        })
      )
  }

  onSearchChange = event => {
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(() => {
      return {
        searchField,
      }
    })
  }

  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className='App'>
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search Monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
