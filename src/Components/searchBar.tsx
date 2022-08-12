import React, { useState } from 'react'
import { SearchBarProps } from '../Types'
import Results from './Results'

export default function SearchBar ({ items, onItemSelected }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleResult = (result:number) => {
    setResult(result)
  }

  return (
    <div>
      <input type='text' value={query} onChange={handleInputChange} />
      <div>Search results: {result} </div>
      <Results items={items} onItemSelected={onItemSelected} query={query} onResultCalculated={handleResult} />
    </div>
  )
}
