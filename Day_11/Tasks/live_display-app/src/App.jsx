import { useState } from 'react'


function App() {
  const [name,display_name] = useState("")

  return (
    <>
      <h2>Live Name Display</h2>

      <input 
      placeholder="Enter Your Name" 
      value={name} 
      onChange={(e)=>display_name(e.target.value)}
      />

      {name === "" ? <h3>Type Something...</h3> : <h3>{name}</h3>}

    </>
  )
}

export default App
