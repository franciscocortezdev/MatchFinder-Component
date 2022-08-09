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
