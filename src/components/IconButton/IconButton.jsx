import React from 'react'
import {twMerge} from 'tailwind-merge'
import PropTypes from 'prop-types'

const IconButton = ({icon: Icon, color, onClick, disabled = false}) => {
  return (
    <button disabled={disabled} onClick={(evt) => { onClick?.(evt) }} className={twMerge('w-6 h-6 p-1 flex items-center justify-center rounded-md text-white disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-not-allowed', color)}><Icon className="w-3 h-3"/></button>
  )
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default IconButton