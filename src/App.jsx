import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddNewTodo from './components/AddNewTodo/AddNewTodo'
import FilterTodoList from './components/FilterTodoList/FilterTodoList'
import AppDataProvider from './components/AppDataProvider'

function App() {
  return (
    <AppDataProvider>
      <div className='container mx-auto'>
        <AddNewTodo />
        <FilterTodoList />

        <div className="pt-6">
          <TodoList />
        </div>

      </div>
    </AppDataProvider>
  )
}

export default App
