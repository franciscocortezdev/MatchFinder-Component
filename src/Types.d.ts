import React from 'react'

export interface itemsProps {
  id: string
  title: string
}

export interface SearchBarProps {
  items:{
    id: string
    title: string
  }[]
  onItemSelected: (item: itemsProps) => void
}

export interface ResultProps {
  items:{
    id: string
    title: string
  }[]
  onItemSelected: (item: itemsProps) => void
  query: string
  onResultCalculated: (result: itemsProps[]) => void
}

export interface MarkedProps {
  item:{
    id: string
    title: string
  }
  query: string
  ItemSelected: (item: itemsProps) => void
}
