import React from 'react'

function ProjectCard({ item, handleDisplay }) {
  return (
    <>
      <div className="list-item" onClick={() => handleDisplay(item.id)}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </>
  )
}

export default ProjectCard
