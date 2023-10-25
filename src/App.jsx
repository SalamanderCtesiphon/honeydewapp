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
          taskTitle: 'Take out the trash',
          dueDate: 'Today',
          priority: 'Low Priority',
        },
        {
          id: '102',
          taskTitle: 'Wash clothes',
          dueDate: 'Today',
          priority: 'Low Priority',
        },
        {
          id: '103',
          taskTitle: 'Do the dishes',
          dueDate: 'Today',
          priority: 'Low Priority',
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
          taskTitle: 'Take out the trash',
          dueDate: 'Today',
          priority: 'Low Priority',
        },
        {
          id: '202',
          taskTitle: 'Wash clothes',
          dueDate: 'Today',
          priority: 'Low Priority',
        },
        {
          id: '203',
          taskTitle: 'Do the dishes',
          dueDate: 'Today',
          priority: 'Low Priority',
        },
      ],
    },
  ])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [taskTitle, setTaskTitle] = useState('')
  const [priority, setPriority] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()
    const newProject = {
      id: uuid(),
      title: title,
      description: description,
      displayToMain: false,
      taskArray: [],
    }
    setProjects([...projects, newProject])
    setTitle('')
    setDescription('')
  }

  function handleDisplay(id) {
    projects.map((item) => {
      if (item.displayToMain === true) {
        return (item.displayToMain = false)
      }
    })
    setProjects([...projects])
    projects.map((item) => {
      if (id === item.id) {
        return (item.displayToMain = true)
      }
    })
    setProjects([...projects])
    return projects
  }

  function handleProjectDelete(id) {
    setProjects(projects.filter((item) => item.id !== id))
  }

  function handleTaskFormSubmit(id) {
    const newTask = {
      id: uuid(),
      taskTitle: taskTitle,
      dueDate: dueDate,
      priority: priority,
    }
    projects.map((item) => {
      if (id === item.id) {
        return item.taskArray.push(newTask)
      }
    })
    setProjects([...projects])
    setTaskTitle('')
    setDueDate('')
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
          handleDisplay={handleDisplay}
        />
        <MainDisplay
          projects={projects}
          handleProjectDelete={handleProjectDelete}
          handleTaskFormSubmit={handleTaskFormSubmit}
          dueDate={dueDate}
          setDueDate={setDueDate}
          priority={priority}
          setPriority={setPriority}
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
