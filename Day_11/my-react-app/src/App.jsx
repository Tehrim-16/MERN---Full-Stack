import { useState } from "react"
import Hello from "./Hello"


function App() {

  const[text,setText] = useState("Hello")
  const[name,setName] = useState("")

  function handleClick(){
    setText("Button Clicked")
  }

  return (
    <>
    <h1>{text} </h1>

      <button onClick={handleClick}>Click Me</button>

      <input type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} />
      <h2>{name}</h2>

      <Hello/>

    </>
  )
}

export default App