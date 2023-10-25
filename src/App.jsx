import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import MainDisplay from './components/MainDisplay'

function App() {
  const [projects, setProjects] = useState([])
  const [item, setItem] = useState({
    title: '',
    decription: '',
    dueDate: '',
    priority: '',
  })

  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <MainDisplay />
      </div>
      <Footer />
    </>
  )
}

export default App
