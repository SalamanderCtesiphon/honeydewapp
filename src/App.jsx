import './App.css'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import MainDisplay from './components/MainDisplay'
import uuid from 'react-uuid'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from './firebase'

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
  ])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [taskTitle, setTaskTitle] = useState('')
  const [priority, setPriority] = useState('')
  const [taskNotes, setTaskNotes] = useState('')
  const [isDisplay, setIsDisply] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editTaskTitle, setEditTaskTitle] = useState('')
  const [editDueDate, setEditDueDate] = useState('')
  const [editPriority, setEditPriority] = useState('')
  const [editTaskNotes, setEditTaskNotes] = useState('')
  const [docID, setDocID] = useState('')

  async function handleFormSubmit(e) {
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

  function editTaskFormSubmit(Iid, Tid) {
    projects.map((item) => {
      if (item.id === Iid) {
        item.taskArray.map((task) => {
          if (task.id === Tid) {
            task.id = Tid
            task.taskTitle = editTaskTitle
            task.taskNotes = editTaskNotes
            task.priority = editPriority
            task.dueDate = editDueDate
            task.isDisplay = false
            task.editing = false
          }
        })
      }
    })
    setProjects([...projects])
    setEditTaskTitle('')
    setEditTaskNotes('')
  }

  async function updateDB() {
    // NEED TO ERASE THE CURRENT DB AND UPDATED IT COMPLETELY WITH THE NEW CURRENT REACT STATE
    try {
      const docRef = await addDoc(collection(db, 'topLevel'), {
        projects,
      })
      setDocID(docRef.id)
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const fetchDb = async () => {
    await getDocs(collection(db, 'topLevel')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      newData.map((item) => {
        if (item.id === docID) {
          console.log(item)
          setProjects([...item.projects])
        }
      })

      console.log(projects)
    })
  }

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('projects'))
    if (projects) {
      setProjects([...projects])
    }
  }, [])

  /* useEffect(() => {
    updateDB()
  }, [projects])

  useEffect(() => {
    fetchDb().then(setProjects([...projects]))
  }, []) */

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
          editTaskFormSubmit={editTaskFormSubmit}
          editTaskTitle={editTaskTitle}
          setEditTaskTitle={setEditTaskTitle}
          editDueDate={editDueDate}
          setEditDueDate={setEditDueDate}
          editPriority={editPriority}
          setEditPriority={setEditPriority}
          editTaskNotes={editTaskNotes}
          setEditTaskNotes={setEditTaskNotes}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
