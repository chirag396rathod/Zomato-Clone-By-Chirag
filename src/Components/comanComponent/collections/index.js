import React from 'react'
import CollectionItem from './collectionitem/collectionItem'


const Collection = ({list}) => {
  return (
    <div>
       <CollectionItem list={list}/>
    </div>
  )
}

export default Collection