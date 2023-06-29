import { useState } from 'react'
import { BsTrashFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import List from "../src/components/List"
import {tareas} from "./mock/todos.json"
import './App.css'

function App() {
  const initialTodos = tareas.map(ele => ele.titulo)
  const [items, setItems ] = useState(initialTodos)
  const [todo, setTodo] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const {todo} = e.target
    setItems([...items, todo.value])
    todo.value = ""
  }
  const handleInput = (e) => {
    let { value } = e.target
    setTodo(value)
  
  }
  const updateItems = (newItems) => {
    setItems([...newItems])
  }
  const deleteAll = () => {
    setItems([])
  }
  const resetTodos = () => {
    setItems(initialTodos)
  }
  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
      <input type="text" name='todo' onInput={handleInput}/>
      {todo ? <button>ADD</button> : <button disabled>ADD</button>}
      
    </form>
      <List items={items} updateItems={updateItems}/>
            <button className='delete-all' onClick={deleteAll}>{<BsTrashFill />}</button>
            <button className='delete-all' onClick={resetTodos}>{<GrPowerReset />}</button>

    </>
  )
}

export default App
