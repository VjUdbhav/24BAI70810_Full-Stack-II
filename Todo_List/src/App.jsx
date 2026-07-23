import { useState } from 'react'
import react from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()])
      setInputValue('')
    }
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Add a task'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
