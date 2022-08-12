import React, { useState } from 'react'
import { SearchBarProps } from '../Types'
import Results from './Results'
import styled from 'styled-components'

const InputSearch = styled.input`
  font-size: 20px;
  width: 100%;
  padding: 2px 4px;
  outline: none;
  border: none;
  color: #144870;
  font-weight: 600;
`

const SearchResult = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding: 5px 0;
`

export default function SearchBar ({ items, onItemSelected }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    setQuery(value)
  }

  const handleResult = (result:number) => {
    setResult(result)
  }

  return (
    <div>
      <InputSearch type='text' value={query} onChange={handleInputChange} />
      <SearchResult>Search results: {result} </SearchResult>
      <Results items={items} onItemSelected={onItemSelected} query={query} onResultCalculated={handleResult} />
    </div>
  )
}
