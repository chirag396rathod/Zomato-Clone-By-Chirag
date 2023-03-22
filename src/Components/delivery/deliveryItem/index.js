import React from 'react';
import './deliveryItem.css'

const DeliveryItem = ({ item }) => {
  return (
    <>
      <div className="deliveryitem-cover">
        <img src={item.cover} alt={item.name} />
      </div>
      <div className="deliveryitemText">
          {item.title}
      </div>
    </>
  );
};

export default DeliveryItem;
