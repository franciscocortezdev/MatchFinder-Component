import React, { useState, useMemo, useEffect } from 'react'
import { ResultProps, itemsProps } from '../Types'
import MarkedItem from './MarkedItem'

export default function Results ({ items, onItemSelected, query, onResultCalculated }: ResultProps) {
  const [result, setResult] = useState<Array<itemsProps>>([])
  const filteredItems = useMemo(() => findMatch(items, query), [items, query])

  useEffect(() => {
    onResultCalculated(result)
  }, result)

  function findMatch (items: itemsProps[], query:string) {
    const res = items.filter((item) => {
      return item.title.toLowerCase().indexOf(query) >= 0 && query.length > 0
    })
    setResult(res)
    return res
  }

  return (
    <div>
      {
        query !== ''
          ? result.map((item) => <MarkedItem key={item.id} item={item} query={query} onClick={onItemSelected} />)
          : ''
      }
    </div>
  )
}
