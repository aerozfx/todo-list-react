import { useEffect, useState, useCallback } from 'react'
import { BsTrashFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import List from "../src/components/List"
import Modal from "../src/components/Modal"
import {tareas} from "./mock/todos.json"
import './App.css'
import debounce from 'just-debounce-it';

function App() {
  const initialTodos = tareas.map(ele => ele.titulo)
  const [items, setItems ] = useState(initialTodos)
  const [todo, setTodo] = useState("")
  const [error, setError] = useState(null)
  const [firstInput, setFirstInput ] = useState(true)
  const [showModal, setShowModal] = useState(false)

  let debounceHandler = useCallback(debounce(() => {
    setTodo("")
  }, 20000) )
  useEffect(() => {
    let error;
    if (todo == "" && !firstInput){
      error = "La tarea no puede estar vacía"
    } else if(todo.length < 6&& !firstInput){
      error = "La tarea debe contener más de 6 caracteres"
    }else {
      setError(null)
      setTodo(todo)
    }
    setError(error)
    debounceHandler(todo)
  }, [firstInput, todo, debounceHandler])

  const handleInput = (e) => {
    let { value } = e.target
    setFirstInput(false)
    setTodo(value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    const {todo} = e.target
    setItems([todo.value,...items ])
    setTodo("")
    setShowModal(true)
    hideModal()
    setFirstInput(true)
  }

  const hideModal = () => {
    setTimeout(() => {
      setShowModal(false)
    }, 5000)
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
      {showModal && <Modal />}
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" name='todo' value={todo} onInput={handleInput}/>
        {todo.length >= 6 ? <button className='btn add-todo'>ADD</button> : <button disabled className='btn add-todo'>ADD</button>}
      </form>
        {error ? <p className='error'>{error}</p> : <p>&nbsp;</p>}
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
