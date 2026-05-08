function TaskList({tasks}) {
  return (
    <div>
      <ul>
        {tasks.map((t,index)=>(
            <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList