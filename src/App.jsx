import './App.css'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import MainDisplay from './components/MainDisplay'
import uuid from 'react-uuid'

function App() {
  const [projects, setProjects] = useState(
    /* [
    {
      id: '1',
      title: 'Project 1',
      description: 'A placeholder project',
      displayToMain: true,
      taskArray: [
        {
          id: '101',
          taskTitle: 'Take out the trash',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
        {
          id: '102',
          taskTitle: 'Wash clothes',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
        {
          id: '103',
          taskTitle: 'Do the dishes',
          dueDate: '2023-10-31',
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
          taskTitle: 'Mow the Grass',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
        {
          id: '202',
          taskTitle: ' Do the dishes',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
        {
          id: '203',
          taskTitle: 'Wash clothes',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
        {
          id: '204',
          taskTitle: 'Change the Oil',
          dueDate: '2023-10-31',
          priority: 'Low Priority',
        },
      ],
    },
  ] */ JSON.parse(localStorage.getItem('projects'))
  )
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [taskTitle, setTaskTitle] = useState('')
  const [priority, setPriority] = useState('')
  const [taskNotes, setTaskNotes] = useState('')
  const [isDisplay, setIsDisply] = useState(false)
  const [editing, setEditing] = useState(false)

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
      taskNotes: taskNotes,
      dueDate: dueDate,
      priority: priority,
      isDisplay: false,
      editing: false,
    }
    projects.map((item) => {
      if (id === item.id) {
        return item.taskArray.push(newTask)
      }
    })
    setProjects([...projects])
    setTaskTitle('')
    setDueDate('')
    setTaskNotes('')
    setEditing(false)
  }

  function handleTaskDelete(Iid, Tid) {
    projects.map((item) => {
      if (item.id === Iid) {
        const tempArr = item.taskArray.filter((task) => task.id !== Tid)
        return (item.taskArray = tempArr)
      }
    })
    setProjects([...projects])
  }

  function handleShowTaskDetails(Iid, Tid) {
    projects.map((item) => {
      if (item.id === Iid) {
        item.taskArray.map((task) => {
          if (task.id === Tid) {
            task.isDisplay = true
          }
        })
      }
    })
    setProjects([...projects])
  }

  function handleHideTaskDetails(Iid, Tid) {
    projects.map((item) => {
      if (item.id === Iid) {
        item.taskArray.map((task) => {
          if (task.id === Tid) {
            task.isDisplay = false
          }
        })
      }
    })
    setProjects([...projects])
  }

  function showEditingTask() {
    console.log('hi')
  }

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
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
          handleTaskDelete={handleTaskDelete}
          taskNotes={taskNotes}
          setTaskNotes={setTaskNotes}
          isDisplay={isDisplay}
          handleShowTaskDetails={handleShowTaskDetails}
          handleHideTaskDetails={handleHideTaskDetails}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
