import React from 'react'

export interface SearchBarProps {
  items:{
    id: string
    title: string
  }[],
  onItemSelected: string
}

export interface ResultProps {
  items:{
    id: string
    title: string
  }[],
  onItemSelected: string
  query: string,
  onResultCalculated: string
}

export interface itemsProps {
    id: string
    title: string
}
