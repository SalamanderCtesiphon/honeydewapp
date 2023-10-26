import React from 'react'

function TaskCard({
  task,
  handleTaskDelete,
  formatDate,
  item,
  handleShowTaskDetails,
  handleHideTaskDetails,
}) {
  return (
    <>
      {task.isDisplay === true ? (
        <div
          className="task-card"
          onClick={() => handleHideTaskDetails(item.id, task.id)}
        >
          <h2 className="card-title">
            <div className="card-title-sub">{task.taskTitle} </div>
            <button onClick={() => handleTaskDelete(item.id, task.id)}>
              Delete
            </button>
          </h2>
          <div className="task-body">
            <p>Due: {formatDate}</p>
            <p>{task.priority}</p>
            <p>{task.taskNotes}</p>
          </div>
        </div>
      ) : (
        <div
          className="task-card"
          onClick={() => handleShowTaskDetails(item.id, task.id)}
        >
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
      )}
    </>
  )
}

export default TaskCard
