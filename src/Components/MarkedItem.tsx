import React, { useMemo } from 'react'
import { MarkedProps, itemsProps } from '../Types'

export default function MarkedItem ({ item, query, ItemSelected }: MarkedProps) {
  const getPosition = (item: itemsProps, query:string) => {
    const index = item.title.toLowerCase().indexOf(query)
    const left = item.title.slice(0, index)
    const right = item.title.slice(index + query.length)
    const center = item.title.slice(index, index + query.length)

    return { left, center, right }
  }
  const { left, center, right } = useMemo(() => getPosition(item, query), [item, query])

  return (
    <div>
      <button onClick={() => ItemSelected(item)}>
        {left}
        <span style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>{center}</span>
        {right}
      </button>
    </div>
  )
}
