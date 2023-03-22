import { ImportExport } from '@material-ui/icons'
import React from 'react'
import './ExploreCard.css'
import star from '../../../../assets/star.svg'

const ExploreCard = ({listItem}) => {

  const name = listItem.info.name
  const coverImg = listItem.info.image.url;
  const deliveryTime = listItem.order.deliveryTime;
  const rating = listItem.info.rating.rating_text;
  const approxPrice = listItem.info.cfo.text;
  const offer = listItem.bulkOffers;
  const cuisines = listItem.info.cuisine.map(item => item.name ).slice(0,3);
  const bottomContainers = listItem.bottomContainers;
  const goldOff = listItem.gold.text
  const proOff = offer.length > 1? offer[0].text : null;
  const dissOff = offer.length > 1 ? offer[1].text : offer.length === 1 ? offer[0].text : null;


  return (
    <div className="ExploreCard cur-po">
      <div className="exploreCover">
        <img src={coverImg} alt={name} />
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className='proOff'>{proOff}</div>}
        {goldOff && <div className='goldOff absolute-center'>{goldOff}</div>}
        {dissOff && <div className='dissOff'>{dissOff}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && <div className='res-reating absolute-center'>{rating} <img  className='starImg absolute-center' src={star} alt="star" /></div>}
      </div>
      <div className="res-row">
        {cuisines.length && <div className='res-cuisines'>{
          cuisines.map((item,i) => {
            return <span className='res-cuisines-tag '>{item}{i !== cuisines.length - 1 && ","}</span>
          })}</div>}
        {approxPrice && <div className='approx-price'>{approxPrice}</div>}
      </div>
      {
        bottomContainers && (
          <div>
            <div className='card-seprator'></div>
            <div className='explore-bottom'>
              <img 
                src={bottomContainers[0].image.url}
                style={{width: "18px"}}
                alt = {bottomContainers[0].text}/>
              <div className="res-bottom-text">
                {bottomContainers[0].text}
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ExploreCard