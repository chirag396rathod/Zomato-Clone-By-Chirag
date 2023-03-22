import React from 'react'
import './filterItem.css'

const FilterItem = ({filter}) => {
  return (
    <div className='flex filterItem cur-po'>
        <div className="filterTitle ">{filter.title}</div>
    </div>
  )
}

export default FilterItem;