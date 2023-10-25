import React from 'react'
import icon from '../assets/add_white_24dp.svg'

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <header id="project-head">
          <h2>Projects</h2>
        </header>
        <main>
          <div className="add-project">
            <img src={icon} alt="add a project" />
          </div>
        </main>
      </section>
    </>
  )
}

export default Sidebar
