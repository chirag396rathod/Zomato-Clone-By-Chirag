import { map } from 'lodash'
import React from 'react'
import './expSection.css';

import ExploreCard from './exploreItem'

function ExploreSection({exploreList,collectionName}) {
  
  return (
    <div className="max-width exploreSection">
        <div className="collectionTitle">{collectionName}</div>
        <div className="exploreGrid">
           {exploreList.map((listItem) => {
             return <ExploreCard listItem={listItem} />
            // console.log(listItem.info.image)
           })}
        </div>
    </div>
  )
}

export default ExploreSection