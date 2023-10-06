import React from 'react'
import AddNewTodo from '../components/AddNewTodo/AddNewTodo'
import FilterTodoList from '../components/FilterTodoList/FilterTodoList'
import TodoList from '../components/TodoList/TodoList'

const TodoApp = () => {
    return (
        <div className='container mx-auto'>
            <AddNewTodo />
            <FilterTodoList />

            <div className="pt-6">
                <TodoList />
            </div>

        </div>
    )
}

export default TodoApp