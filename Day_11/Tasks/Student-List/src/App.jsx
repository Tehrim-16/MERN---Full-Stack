import { useState } from 'react'
import './App.css'
import StudentList from './StudentList'

function App() {
  const [student, addCount] = useState("")
  const [students,addedCount] = useState(["Ali","Sara","John"])

  function addStudent() {

    if (student ==="") return;

    addedCount([...students,student])
    addCount("")
  }
  return (
    <>
    <h2> Student List</h2>

    <input type="text"
    placeholder="Enter Name"
    value={student}
    onChange={(e)=>addCount(e.target.value)} />

    <button onClick={addStudent}>ADD</button>
      
    <StudentList student={students}/>
    </>
  )
}

export default App
