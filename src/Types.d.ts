export interface SearchBarProps {
  items:{
    id: string
    title: string
  }[],
  onItemSelected: {
    id: string
    title: string
  }
}

export interface ResultProps {
  items:{
    id: string
    title: string
  }[],
  onItemSelected: {
    id: string
    title: string
  }
  query: string,
  onResultCalculated: number
}
