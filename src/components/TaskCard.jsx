import React from 'react'
import EditTask from './EditTask'

function TaskCard({
  task,
  handleTaskDelete,
  formatDate,
  item,
  handleShowTaskDetails,
  handleHideTaskDetails,
  editTaskFormSubmit,
  setEditTaskTitle,
  editTaskTitle,
  editDueDate,
  setEditDueDate,
  editPriority,
  setEditPriority,
  editTaskNotes,
  setEditTaskNotes,
}) {
  return (
    <>
      {task.isDisplay === true ? (
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
          <p className="task-body">{task.taskNotes}</p>
          <div className="btn-box">
            <EditTask
              item={item}
              task={task}
              editTaskFormSubmit={editTaskFormSubmit}
              setEditTaskTitle={setEditTaskTitle}
              editTaskTitle={editTaskTitle}
              editDueDate={editDueDate}
              setEditDueDate={setEditDueDate}
              editPriority={editPriority}
              setEditPriority={setEditPriority}
              editTaskNotes={editTaskNotes}
              setEditTaskNotes={setEditTaskNotes}
            />
            <button onClick={() => handleHideTaskDetails(item.id, task.id)}>
              {' '}
              Hide Details
            </button>
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
