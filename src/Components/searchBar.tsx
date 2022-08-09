import React, { useState } from 'react'
import { SearchBarProps } from '../Types'

export default function SearchBar ({ items, onItemSelected }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <input type='text' value={query} onChange={handleInputChange} />
    </div>
  )
}
