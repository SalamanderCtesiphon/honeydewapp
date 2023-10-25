import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import MainDisplay from './components/MainDisplay'

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

  return (
    <>
      <Header />
      <div className="main">
        <Sidebar projects={projects} />
        <MainDisplay projects={projects} />
      </div>
      <Footer />
    </>
  )
}

export default App
