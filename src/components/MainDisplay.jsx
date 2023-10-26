import React from 'react'
import ConfirmDelete from './ConfirmDelete'
import AddTask from './AddTask'
import { format } from 'date-fns'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

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
  handleTaskDelete,
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
              const date = new Date(task.dueDate)
              const formatDate = date.toString().slice(0, 10)
              return (
                <div className="task-card" key={task.id}>
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
              )
            })
          }
        })}
      </section>
    </>
  )
}

export default MainDisplay
