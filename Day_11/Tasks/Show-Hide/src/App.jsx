import { useState } from 'react' 
import './App.css'

function App() {
  const [name, display_name] = useState("")
  const[show,setShow] = useState(false)

  return (
    <>
      <h2>Show-Hide Component</h2>
 

      <input 
      placeholder="Type something" 
      value={name} 
      onChange={(e)=>display_name(e.target.value)}
      />

      <button onClick={()=>setShow(!show)}>Click </button>

      {show ? <h2>{name}</h2> : null }
    </>
  )
}

export default App