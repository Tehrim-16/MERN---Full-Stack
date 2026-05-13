import React from "react"
function  StudentList({student}) {
  return (
    <div>
      <ul>
        {student.map((s,index)=>(
            <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList