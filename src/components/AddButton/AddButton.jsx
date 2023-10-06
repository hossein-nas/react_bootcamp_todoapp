import React from 'react'
import PropTypes from 'prop-types'
import {twMerge} from 'tailwind-merge'

const AddButton = ({className, onClick}) => {
    return (
        <button onClick={(evt) => { onClick?.(evt) }} type="button" className={twMerge('p-5 rounded-lg text-white bg-green-500', className)}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.19531 6.25H6.25V1.19531C6.25 0.535156 6.80859 0 7.5 0C8.19141 0 8.75 0.535156 8.75 1.19531V6.25H13.8047C14.4648 6.25 15 6.80859 15 7.5C15 8.19141 14.4648 8.75 13.8047 8.75H8.75V13.8047C8.75 14.4648 8.19141 15 7.5 15C6.80859 15 6.25 14.4648 6.25 13.8047V8.75H1.19531C0.535156 8.75 0 8.19141 0 7.5C0 6.80859 0.535156 6.25 1.19531 6.25Z" fill="currentColor" />
            </svg>
        </button>
    )
}

AddButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default AddButton