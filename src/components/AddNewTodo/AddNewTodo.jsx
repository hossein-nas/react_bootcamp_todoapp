import React, { useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import SearchInput from '../SearchInput/SearchInput'
import AddButton from '../AddButton/AddButton'
import { AppData } from '../AppDataProvider'

const AddNewTodo = props => {
    const inputRef = useRef(null);

    const { addNewTodo, todoText, setTodoText } = useContext(AppData)


    const handleAddNewItem = () => {
        if (todoText.length >= 3) {
            addNewTodo(todoText)

            inputRef.current.focus();
        }
    }

    return (
        <div className='flex pt-6'>
            <SearchInput onEnterPressed={handleAddNewItem} ref={inputRef} text={todoText} setText={setTodoText} className="flex-grow rounded-l-lg rounded-tr-none rounded-br-none" />
            <AddButton className='rounded-r-lg rounded-tl-none rounded-bl-none' onClick={handleAddNewItem} />
        </div>
    )
}

AddNewTodo.propTypes = {}

export default AddNewTodo