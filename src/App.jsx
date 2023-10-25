import './App.css'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import MainDisplay from './components/MainDisplay'
import uuid from 'react-uuid'

function App() {
  const [projects, setProjects] = useState([
    {
      id: '1',
      title: 'Project 1',
      description: 'A placeholder project',
      displayToMain: true,
      taskArray: [
        {
          id: '101',
          title: 'Take out the trash',
          dueDate: 'Today',
          priority: 'Low',
        },
        {
          id: '102',
          title: 'Wash clothes',
          dueDate: 'Today',
          priority: 'Low',
        },
        {
          id: '103',
          title: 'Do the dishes',
          dueDate: 'Today',
          priority: 'Low',
        },
      ],
    },
    {
      id: '2',
      title: 'Project 2',
      description: 'Another placeholder project',
      displayToMain: false,
      taskArray: [
        {
          id: '201',
          title: 'Take out the trash',
          dueDate: 'Today',
          priority: 'Low',
        },
        {
          id: '202',
          title: 'Wash clothes',
          dueDate: 'Today',
          priority: 'Low',
        },
        {
          id: '203',
          title: 'Do the dishes',
          dueDate: 'Today',
          priority: 'Low',
        },
      ],
    },
  ])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()
    const newProject = {
      id: uuid(),
      title: title,
      description: description,
      taskArray: [],
    }
    setProjects([...projects, newProject])
    setTitle('')
    setDescription('')
  }

  useEffect(() => {
    console.log(projects)
  }, [projects])

  return (
    <>
      <Header />
      <div className="main">
        <Sidebar
          projects={projects}
          handleFormSubmit={handleFormSubmit}
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
        />
        <MainDisplay projects={projects} />
      </div>
      <Footer />
    </>
  )
}

export default App
