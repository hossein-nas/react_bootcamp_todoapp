import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

export const AppData = createContext(null);
let nextId = 0;

const AppDataProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  // const [filterredTodos, setFilterredTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  /*   let filterredTodos = []
  
    if( activeFilter === 'all'){
      alert('all')
      filterredTodos = todos
    }
  
    if( activeFilter === 'completed'){
      alert('completed')
      filterredTodos = todos.filter(todo => todo.completed === true)
    }
  
    if( activeFilter === 'pending'){
      alert('pending')
      filterredTodos = todos.filter(todo => todo.completed === false)
    } */

  const filterredTodos = useMemo(() => {
    if (activeFilter === 'all') {
      return todos
    }

    if (activeFilter === 'completed') {
      return todos.filter(todo => todo.completed === true)
    }

    if (activeFilter === 'pending') {
      return todos.filter(todo => todo.completed === false)
    }

  }, [activeFilter, todos])

  const allTodos = useMemo(() => {
    return todos.length
  }, [todos])

  const allCompletedTodos = useMemo(() => {
    return todos.filter(todo => todo.completed === true).length
  }, [todos])

  const allPendingTodos = useMemo(() => {
    return todos.filter(todo => todo.completed === false).length
  }, [todos])


  const addNewTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        text,
        completed: false
      }
    ])

    setTodoText('')
  }

  const toggleTodoCompletion = (id) => {

    const foundTodoIndex = todos.findIndex(todo => todo.id === id);
    if (foundTodoIndex != -1) {
      const copiedTodos = [...todos];
      const copiedTodo = { ...todos[foundTodoIndex] }
      copiedTodo.completed = !copiedTodo.completed
      copiedTodos.splice(foundTodoIndex, 1, copiedTodo)

      setTodos(copiedTodos);
    }
  }

  const updateTodoText = (id, text) => {

    const foundTodoIndex = todos.findIndex(todo => todo.id === id);
    if (foundTodoIndex != -1) {
      const copiedTodos = [...todos];
      const copiedTodo = { ...todos[foundTodoIndex] }
      copiedTodo.text = text
      copiedTodos.splice(foundTodoIndex, 1, copiedTodo)

      setTodos(copiedTodos);
    }
  }

  const handleDeleteTodoItem = (id) => {
    const foundTodoIndex = todos.findIndex(todo => todo.id === id);
    if (foundTodoIndex != -1) {
      const copiedTodos = [...todos];
      copiedTodos.splice(foundTodoIndex, 1)
      setTodos(copiedTodos);
    }
  }

/*   const test = useCallback(() => {
    alert('test')
  }, [todos])

  useEffect(() => {
    test();
  },[test]) */

  // useEffect(() => {
  //   setFilterredTodos([...todos])
  // }, [todos])

  // useEffect(() => {

  //   if (activeFilter === 'all') {
  //     setFilterredTodos([...todos])
  //   }
  //   else if (activeFilter === 'completed') {
  //     setFilterredTodos(
  //       todos.filter(todo => todo.completed === true)
  //     )
  //   }
  //   else if (activeFilter === 'pending') {
  //     setFilterredTodos(
  //       todos.filter(todo => todo.completed === false)
  //     )
  //   }

  // }, [activeFilter])

  const value = {
    todos: filterredTodos,
    todoText,
    activeFilter,
    allTodos,
    allCompletedTodos,
    allPendingTodos,
    setActiveFilter,
    setTodoText,
    addNewTodo,
    toggleTodoCompletion,
    updateTodoText,
    handleDeleteTodoItem
  }

  return (
    <AppData.Provider value={value}>
      {children}
    </AppData.Provider>
  )
}

AppDataProvider.propTypes = {
  children: PropTypes.node.isRequired
}


export default AppDataProvider