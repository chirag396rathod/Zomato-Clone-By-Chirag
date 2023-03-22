import React from 'react';
import './TopBrandItem.css';
const TopBrandsItem = ({ item }) => {
  return (
    <div className="TopBrands cur-po">
      <div className="TopBrandCover">
        <div className="Brands-Wrapper">
          <img src={item.cover} alt={item.title} />
        </div>
        <div className="Brands-name">{item.title}</div>
        <div className="Brands-time">{item.time}</div>
      </div>
    </div>
  );
};

export default TopBrandsItem;
