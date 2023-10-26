import React from 'react'
import AddProject from './AddProject'
import ProjectCard from './ProjectCard'

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
              <ProjectCard
                item={item}
                key={item.id}
                handleDisplay={handleDisplay}
              />
            )
          })}
        </main>
      </section>
    </>
  )
}

export default Sidebar
