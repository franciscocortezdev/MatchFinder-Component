import React from 'react'

export interface SearchBarProps {
  items:{
    id: string
    title: string
  }[]
  onItemSelected: string
}
export interface itemsProps {
  id: string
  title: string
}

export interface ResultProps {
  items:{
    id: string
    title: string
  }[]
  onItemSelected: (result: itemsProps) => void
  query: string
  onResultCalculated: (result: itemsProps[]) => void
}

export interface MarkedProps {
  item:{
    id: string
    title: string
  }
  query: string
  onClick: (result: itemsProps) => void
}
