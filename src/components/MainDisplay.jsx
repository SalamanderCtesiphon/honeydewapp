import React from 'react'
import ConfirmDelete from './ConfirmDelete'
import AddTask from './AddTask'

function MainDisplay({
  projects,
  handleProjectDelete,
  handleTaskFormSubmit,
  taskTitle,
  setTaskTitle,
  dueDate,
  setDueDate,
  priority,
  setPriority,
}) {
  return (
    <>
      <section className="display">
        {projects.map((item) => {
          if (item.displayToMain === true) {
            return (
              <div className="task-header" key={item.id}>
                <h1>{item.title}</h1>
                <div className="btn-box">
                  <ConfirmDelete
                    handleProjectDelete={handleProjectDelete}
                    item={item}
                  />
                  <AddTask
                    handleTaskFormSubmit={handleTaskFormSubmit}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    priority={priority}
                    setPriority={setPriority}
                    taskTitle={taskTitle}
                    setTaskTitle={setTaskTitle}
                    item={item}
                  />
                </div>
              </div>
            )
          }
        })}
        {projects.map((item) => {
          if (item.displayToMain === true) {
            return item.taskArray.map((task) => {
              return (
                <div className="task-card" key={task.id}>
                  <h2 className="card-title">
                    {task.taskTitle} <button>Remove from List</button>
                  </h2>
                  <div className="task-body">
                    <p>Due: {task.dueDate}</p>
                    <p>{task.priority}</p>
                  </div>
                </div>
              )
            })
          }
        })}
      </section>
    </>
  )
}

export default MainDisplay
