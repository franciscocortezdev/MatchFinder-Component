import React, { useState } from 'react'
import { people, calendar, emails } from './Data'
import { itemsProps } from './Types'
import SearchBar from './Components/searchBar'
import styled from 'styled-components'

const AppContainer = styled.div`
  height: 100vh;
  background-color: #227ABD;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SelectedItem = styled.div`
  height: 50px;
  font-size: 20px;
  color: #fff;
  border-bottom: 2px solid #fff;
  display: grid;
  place-content: center;
  margin-bottom: 30px;
`
const BtnOption = styled.button`
  font-size: 16px;
  background-color: #144870;
  color: #fff;
  border: none;
  padding: 4px 10px;
`
const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`

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
    <AppContainer>
      <SelectedItem>
        {selection && <div>{selection.id} selected:  {selection.title}</div>}
      </SelectedItem>
      <div>
        <BtnContainer>
          <BtnOption onClick={handleClick} name='all'>All</BtnOption>
          <BtnOption onClick={handleClick} name='people'>People</BtnOption>
          <BtnOption onClick={handleClick} name='calendar'>Calendar</BtnOption>
          <BtnOption onClick={handleClick} name='email'>Emails</BtnOption>
        </BtnContainer>
        <SearchBar items={data} onItemSelected={handleItemClick}/>
      </div>

    </AppContainer>
  )
}

export default App
