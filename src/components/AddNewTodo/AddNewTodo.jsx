import React, { useRef } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import AddButton from '../AddButton/AddButton'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, setTodoText } from '../../store/todosSlice'

const AddNewTodo = props => {

    const todoText = useSelector((state) => state.todos.todoText)
    const dispatch = useDispatch();

    const inputRef = useRef(null);



    const handleAddNewItem = () => {
        if (todoText.length >= 3) {
            dispatch(addTodo({ text: todoText }))

            inputRef.current.focus();
        }
    }

    return (
        <div className='flex pt-6'>
            <SearchInput onEnterPressed={handleAddNewItem} ref={inputRef} text={todoText} setText={(value) => dispatch(setTodoText({ text: value }))} className="flex-grow rounded-l-lg rounded-tr-none rounded-br-none" />
            <AddButton className='rounded-r-lg rounded-tl-none rounded-bl-none' onClick={handleAddNewItem} />
        </div>
    )
}

AddNewTodo.propTypes = {}

export default AddNewTodo