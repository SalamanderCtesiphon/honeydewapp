import React from 'react'
import AddProject from './AddProject'

function Sidebar({
  projects,
  handleFormSubmit,
  title,
  description,
  setTitle,
  setDescription,
  handleDisplay,
}) {
  return (
    <>
      <section className="sidebar">
        <header id="project-head">
          <h2>Projects</h2>
        </header>
        <main className="sidebar-main">
          <AddProject
            handleFormSubmit={handleFormSubmit}
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
          />
          {projects.map((item) => {
            return (
              <div
                key={item.id}
                className="list-item"
                onClick={() => handleDisplay(item.id)}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })}
        </main>
      </section>
    </>
  )
}

export default Sidebar
