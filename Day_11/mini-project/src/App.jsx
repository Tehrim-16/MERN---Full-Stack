import { useState } from "react"
import TaskList from "./components/TaskList";



function App() {
 
  const[task,setTask] = useState("")
  const[tasks,setTasks] = useState([])

  function addTask(){
    if(task ==="") return;

    setTasks([...tasks,task])
    setTask("")
  }

  return (
    <>
      <h1>To-DoList</h1>

      <input 
      placeholder="Enter Your Task" 
      value={task} 
      onChange={(e)=>setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <TaskList tasks={tasks}/>
    </>
  )
}

export default App