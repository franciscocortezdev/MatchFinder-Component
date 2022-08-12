import React, { useMemo } from 'react'
import { MarkedProps, itemsProps } from '../Types'
import styled from 'styled-components'

const ResultItem = styled.button`
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  background-color:#144870;
  border: none;
  padding: 4px 10px;
  margin: 4px 0;
  transition: transform .5s;

  &:hover{
    transform: scale(1.1);
    cursor: pointer;
  }
`
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
      <ResultItem onClick={() => ItemSelected(item)}>
        {left}
        <span style={{ backgroundColor: '#227ABD' }}>{center}</span>
        {right}
      </ResultItem>
    </div>
  )
}
