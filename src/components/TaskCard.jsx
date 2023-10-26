import React from 'react'

function TaskCard({ task, handleTaskDelete, formatDate, item }) {
  return (
    <>
      <div className="task-card">
        <h2 className="card-title">
          <div className="card-title-sub">{task.taskTitle} </div>
          <button onClick={() => handleTaskDelete(item.id, task.id)}>
            Delete
          </button>
        </h2>
        <div className="task-body">
          <p>Due: {formatDate}</p>
          <p>{task.priority}</p>
        </div>
      </div>
    </>
  )
}

export default TaskCard
