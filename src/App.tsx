import React, { useState } from 'react'
import { people, calendar, emails } from './Data'
import { itemsProps } from './Types'
import SearchBar from './Components/searchBar'
import styled from 'styled-components'

function App () {
  const [data, setData] = useState([...people, ...calendar, ...emails])
  const [selection, setSelection] = useState<itemsProps>()

  const handleClick = (e:React.FormEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget

    switch (name) {
      case 'all':
        setData([...people, ...calendar, ...emails])
        break
      case 'people':
        setData([...people])
        break

      case 'calendar':
        setData([...calendar])
        break

      case 'email':
        setData([...emails])
        break

      default:
        break
    }
  }
  const handleItemClick = (item:itemsProps) => {
    const idUpper = item.id.charAt(0).toUpperCase() + item.id.slice(1)

    const id = idUpper.match(/[a-zA-Z]+/g)?.toString()

    if (id) {
      setSelection({ id, title: item.title })
    }
  }
  return (
    <>
    <div>
      <button onClick={handleClick} name='all'>All</button>
      <button onClick={handleClick} name='people'>People</button>
      <button onClick={handleClick} name='calendar'>Calendar</button>
      <button onClick={handleClick} name='email'>Emails</button>
      <SearchBar items={data} onItemSelected={handleItemClick}/>
    </div>
    <div>
      {selection && <div>{selection.id} selected:  {selection.title}</div>}
    </div>
    </>
  )
}

export default App
