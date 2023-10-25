import React from 'react'

function MainDisplay({ projects }) {
  return (
    <>
      <section className="display">
        {projects.map((item) => {
          if (item.displayToMain === true) {
            return <h1 key={item.id}>{item.title}</h1>
          }
        })}
        {projects.map((item) => {
          if (item.displayToMain === true) {
            return item.taskArray.map((task) => {
              return (
                <div className="task-card" key={task.id}>
                  <h2>{task.title}</h2>
                  <p>Due: {task.dueDate}</p>
                  <p>Priority: {task.priority}</p>
                  <button>Remove from List</button>
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
