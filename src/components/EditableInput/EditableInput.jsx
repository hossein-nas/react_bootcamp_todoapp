import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { FaXmark, FaCheck } from 'react-icons/fa6'

import IconButton from '../IconButton/IconButton'

const EditableInput = props => {
    const inputRef = useRef(null);

    const [text, setText] = useState(props.defaultText)

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const onSubmit = () => {
        if (text.length) {
            props.onSubmit?.(text)
        }
    }

    const onCancel = () => {
        props.onCancel?.();
    }

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 50)
    }, [])

    const handleKeyUp = (evt) => {
        if( evt.code === 'Enter'){
            onSubmit();
        }
        else if (evt.code === 'Escape'){
            onCancel();
        }
    }


    return (
        <div className='flex h-6 gap-2'>
            <input onKeyUp={handleKeyUp} ref={inputRef} value={text} onChange={handleChange} className='flex-grow p-2 text-gray-600 border border-gray-300 rounded focus:outline-none' />
            <IconButton icon={FaCheck} color="bg-blue-500" disabled={text.length === 0} onClick={onSubmit} />
            <IconButton icon={FaXmark} color="bg-gray-500" onClick={onCancel} />
        </div>
    )
}

EditableInput.propTypes = {
    defaultText: PropTypes.string,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
}

export default EditableInput