import { useRef, useState } from 'react'
import './App.css'
import ShoppingAdd from './components/ShoppingAdd'
import Todo from './components/Todo'
import { v4 as uuidv4 } from "uuid"

function App() {

  const [todos, setTodos] = useState([])

  const textRef = useRef()
  const numRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    setTodos([...todos, { id: uuidv4(), complete: false, number: numRef.current.value, text: textRef.current.value }])
  }

  function handleDelete(id) {
    setTodos(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className='App'>
      <h1>Shopping List</h1>
      <ShoppingAdd textRef={textRef} numRef={numRef} handleSubmit={handleSubmit} />
      {todos.map(item => (
        <Todo title={item.text} num={item.number} key={item.id} handleDelete={() => handleDelete(item.id)} todos={todos} />
      ))}
    </div>
  )
}

export default App 