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
    <header>
      <h1>TODO LIST</h1>
    </header>
    <main>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" name='todo' onInput={handleInput}/>
        {todo ? <button className='btn add-todo'>ADD</button> : <button disabled className='btn add-todo'>ADD</button>}
        
      </form>
      <List items={items} updateItems={updateItems}/>
      <section className='buttons'>
        <button className='btn delete-all' onClick={deleteAll}>{<BsTrashFill />}</button>
        <button className='btn reset-all' onClick={resetTodos}>{<GrPowerReset />}</button>
      </section>
    </main>
    </>
  )
}

export default App
