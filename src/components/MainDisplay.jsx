import React from 'react'

function MainDisplay({ projects }) {
  return (
    <>
      <section className="display">
        {projects.map((item) => {
          if (item.displayToMain === true) {
            return <h1>{item.title}</h1>
          }
        })}
        {projects.map((item) => {
          if (item.displayToMain === true) {
            return item.taskArray.map((task) => {
              return (
                <div className="task-card">
                  <h4>{task.title}</h4>
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
