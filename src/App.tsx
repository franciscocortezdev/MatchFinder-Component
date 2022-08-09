import './App.css'
import React, { useState } from 'react'
import { people, calendar, emails } from './Data'
import SearchBar from './Components/searchBar'

function App () {
  const [data, setData] = useState([...people, ...calendar, ...emails])
  const [selection, setSelection] = useState(null)
  const [currentOption, setCurrentOption] = useState('all')

  const handleClick = (e:React.FormEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget

    switch (name) {
      case 'all':
        setData([...people, ...calendar, ...emails])
        setCurrentOption('all')
        break
      case 'people':
        setData([...people])
        setCurrentOption('people')
        break

      case 'calendar':
        setData([...calendar])
        setCurrentOption('calendar')
        break

      case 'email':
        setData([...emails])
        setCurrentOption('email')
        break

      default:
        break
    }
  }
  return (
    <div>
     <button onClick={handleClick} name='all'>All</button>
     <button onClick={handleClick} name='people'>People</button>
     <button onClick={handleClick} name='calendar'>Calendar</button>
     <button onClick={handleClick} name='email'>Emails</button>
    <SearchBar items={data} onItemSelected={'()=>{}'}/>
    </div>
  )
}

export default App
