import React, { useState, useMemo } from 'react'
import { ResultProps, itemsProps } from '../Types'

export default function Results ({ items, onItemSelected, query, onResultCalculated }: ResultProps) {
  const [result, setResult] = useState<Array<itemsProps>>([])
  const filteredItems = useMemo(() => findMatch(items, query), [items, query])

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
          ? filteredItems.map((item) => <div key={item.id}>{item.title}</div>)
          : ''
      }
    </div>
  )
}
