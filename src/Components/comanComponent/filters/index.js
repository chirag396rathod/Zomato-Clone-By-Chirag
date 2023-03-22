import React from 'react'
import './filter.css'
import FilterItem from './filterItem'
import { map } from 'lodash'

const Filter = ({FilterList}) => {
  return (
   <div className='flex filterItems'>
     {FilterList && map(FilterList,(list) => {
        return <FilterItem filter={list} key={list.id}/>;
     })}
   </div>
  )
}

export default Filter