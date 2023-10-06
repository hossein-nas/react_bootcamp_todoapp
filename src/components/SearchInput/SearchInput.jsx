import React, { useEffect, useRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types'

let SearchInput = ({ className, text, setText, onEnterPressed }, ref) => {
    // const inputRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            ref.current.focus();
        }, 50)
    }, [])

    const handleKeyUp = (keyUpEvent) => {
        if(keyUpEvent.code == 'Enter'){
            onEnterPressed?.()
        }

    }

    return (
        <input ref={ref} onKeyUp={handleKeyUp} value={text} onChange={(evt) => setText(evt.target.value)} type="text" className={twMerge('px-6 py-4 text-gray-600 border rounded border-gray-300 focus:outline-none hover:borde-gray-400 focus:border-green-300', className)} />
    )
}


SearchInput.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    setText: PropTypes.func.isRequired,
    onEnterPressed: PropTypes.func
}

SearchInput = forwardRef(SearchInput)


export default SearchInput