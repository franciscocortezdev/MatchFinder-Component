import React, { useState } from 'react'
import { SearchBarProps, itemsProps } from '../Types'
import Results from './Results'

export default function SearchBar ({ items, onItemSelected }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<Array<itemsProps>>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleResult = (result:itemsProps[]) => {
    setResult(result)
  }
  const handleItemClick = (item:itemsProps) => {

  }
  return (
    <div>
      {result && <div>Resultados: {result.length} </div>}
      <input type='text' value={query} onChange={handleInputChange} />
      <Results items={items} onItemSelected={handleItemClick} query={query} onResultCalculated={handleResult} />
    </div>
  )
}
