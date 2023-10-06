import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import TodoListItem from '../TodoListItem/TodoListItem'
import { AppData } from '../AppDataProvider'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '../../store/todosSlice'

const TodoList = props => {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch();

    if (todos.length === 0) {
        return <div className='min-h-[6rem] flex items-center justify-center text-gray-600 user-select-none'> You have nothing to do.</div>
    }

    return (
        <div className="flex flex-col items-stretch gap-y-4">
            {todos.map(todo => <TodoListItem key={todo.id} deleteItem={(id) => dispatch(deleteTodo({ id }))} updateText={(id, text) => dispatch(editTodo({ id, text }))} toggle={(id) => dispatch(toggleTodo({ id }))} id={todo.id} text={todo.text} completed={todo.completed} />)}
        </div>
    )
}

export const TodoListItemShape = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

TodoList.propTypes = {
    // todos: PropTypes.arrayOf(PropTypes.shape(TodoListItemShape)).isRequired
}

export default TodoList