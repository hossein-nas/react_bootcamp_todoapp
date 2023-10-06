import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge';

const RadioButton = props => {
    const activeClasses = 'bg-gray-600 text-white hover:bg-gray-700 hover:text-gray-200';
    const normalClasses = 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800 hover:bg-gray-200';
    return (
        <button onClick={(evt) => { props.onClick?.(evt) }} className={twMerge(`border inline-block text-center  py-2 min-w-[100px] rounded-lg hover:cursor-pointer ${props.isActive ? activeClasses : normalClasses}`, props.className)}>
            {props.children}
        </button>
    )
}

RadioButton.propTypes = {
    isActive: PropTypes.boolean,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default RadioButton