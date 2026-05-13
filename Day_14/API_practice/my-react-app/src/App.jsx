import { useState } from 'react'
import API1 from './API1'
import "./index.css"
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Hello</h2>
      <API1/>

    </>
  )
}

export default App
