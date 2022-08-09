import React, { useState } from 'react'
import { SearchBarProps } from '../Types'
import Results from './Results'

export default function SearchBar ({ items, onItemSelected }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <input type='text' value={query} onChange={handleInputChange} />
      <Results items={items} onItemSelected={'()=>{}'} query={query} onResultCalculated={'()=>{}'} />
    </div>
  )
}
