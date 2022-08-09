import './App.css'
import { useState } from 'react'
import { people, calendar, emails } from './Data'

function App () {
  const [data, setData] = useState([...people, ...calendar, ...emails])
  const [selection, setSelection] = useState(null)
  const [currentOption, setCurrentOption] = useState('all')

  return (
    <div className="App">
     <h1>Hello World</h1>
    </div>
  )
}

export default App
