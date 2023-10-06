import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../RadioButton/RadioButton'
import { AppData } from '../AppDataProvider'

const FilterTodoList = props => {
    const { setActiveFilter, activeFilter, allTodos, allCompletedTodos, allPendingTodos } = useContext(AppData)

    return (
        <>
            <div className="flex pt-6 gap-x-4">
                <RadioButton isActive={ activeFilter === 'all'} className="basis-1/3" onClick={() => setActiveFilter('all')}>All ({allTodos})</RadioButton>
                <RadioButton isActive={ activeFilter === 'completed'} className="basis-1/3" onClick={() => setActiveFilter('completed')}>Completed ({allCompletedTodos})</RadioButton>
                <RadioButton isActive={ activeFilter === 'pending'} className="basis-1/3" onClick={() => setActiveFilter('pending')}>Pending ({allPendingTodos})</RadioButton>
            </div>

        </>
    )
}

FilterTodoList.propTypes = {}

export default FilterTodoList