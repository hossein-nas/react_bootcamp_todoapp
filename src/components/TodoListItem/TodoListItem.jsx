import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaPen, FaTrashCan } from 'react-icons/fa6'
import IconButton from '../IconButton/IconButton'
import EditableInput from '../EditableInput/EditableInput'

const TodoListItem = props => {
    const [isEditMode, setIsEditMode] = useState(false)

    const handleTodoItemEdit= () => {
        setIsEditMode(true);
    }

    const handleTodoDelete = () => {
        props.deleteItem?.(props.id)
    }

    const updateTodoText = (newText) => {
        props.updateText?.(props.id, newText)
        setIsEditMode(false)
    }

    const cancelTextUpdate = () => {
        setIsEditMode(false)
    }

    return (
        <div className='flex p-4 border border-gray-300 rounded-lg'>
            {/* Text + checkbox */}
            <div className='flex items-center flex-grow gap-x-4'>
                <input type="checkbox" checked={props.completed} onChange={() => props.toggle(props.id)} />
                {
                    isEditMode ?
                        <EditableInput defaultText={props.text} onSubmit={updateTodoText} onCancel={cancelTextUpdate}/> :
                        <div className={props.completed ? 'line-through' : ''}>{props.text}</div>
                }

            </div>
            {/* Buttons */}
            <div className='flex flex-shrink-0 gap-2'>
                <IconButton icon={FaPen} color="bg-blue-500 hover:bg-blue-600 transition-all" onClick={handleTodoItemEdit} />
                <IconButton icon={FaTrashCan} color="bg-red-500 hover:bg-red-600 transition-all" onClick={handleTodoDelete} />
            </div>
        </div>
    )
}


TodoListItem.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    updateText: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

export default TodoListItem