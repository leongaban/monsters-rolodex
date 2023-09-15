import { useState, useEffect } from 'react'

import CardList from './components/cardlist/CardList.component'
import SearchBox from './components/searchbox/SearchBox.component'
import './App.css'

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFiltersMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFiltersMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

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

export default App
