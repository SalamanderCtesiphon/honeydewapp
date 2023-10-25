import React from 'react'

function MainDisplay({ projects }) {
  return (
    <>
      <section className="display">
        {projects.map((item) => {
          if (item.displayToMain === true) {
            return (
              <div className="task-header">
                <h1 key={item.id}>{item.title}</h1>
                <div className="btn-box">
                  <button>Delete Project</button>
                  <button onClick={() => alert('button clicked')}>
                    add task
                  </button>
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
                    {task.title} <button>Remove from List</button>
                  </h2>
                  <div className="task-body">
                    <p>Due: {task.dueDate}</p>
                    <p>Priority: {task.priority}</p>
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
