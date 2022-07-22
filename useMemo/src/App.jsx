import { useState } from 'react'
import { Fruits } from './components/Fruits'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Fruits/>
      <br/>
      <br/>
      <Search/>
    </div>
  )
}

export default App
