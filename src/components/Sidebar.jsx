import React from 'react'
import icon from '../assets/add_white_24dp.svg'

function Sidebar({ projects }) {
  return (
    <>
      <section className="sidebar">
        <header id="project-head">
          <h2>Projects</h2>
        </header>
        <main className="sidebar-main">
          <div className="add-project" onClick={() => alert('button clicked')}>
            <img src={icon} alt="add a project" />
          </div>
          {projects.map((item) => {
            return (
              <div
                key={item.id}
                className="list-item"
                onClick={() => alert('button clicked')}
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
