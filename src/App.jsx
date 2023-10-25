import './App.css'
import Header from './components/Header'
import { useState } from 'react'

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
      <p>To Do App give me a job!</p>
    </>
  )
}

export default App
