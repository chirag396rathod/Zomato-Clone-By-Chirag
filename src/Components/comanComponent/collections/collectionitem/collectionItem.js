import React from "react";
import ArrowDropLeftIcon from "@material-ui/icons/ArrowDropDown";
import Slider from "react-slick";
import NexArrow from "../../carousel/nexArrow";
import PrevArrow from "../../carousel/prveArrow";
import "./collectionitem.css";

const CollectionItem = ({ list }) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NexArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collectionTitle">Collection</div>
        <div className="collectionSubtitleRow">
          <div className="sub-title">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Kolkata, based on trends
          </div>
          <div className="collctionLocation">
            All collections in Kolkata{" "}
            <div className="absolute-center">
              <ArrowDropLeftIcon />
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => {
            return (
              <div key={item.id}>
                <div className="collection-cover">
                  <img src={item.cover} alt={item.name} />
                  <div className="gredient-bg" />
                  <div className="collection-card-title">{item.name}</div>
                  <div className="collection-card-subtitle">
                    <div>{item.place}</div>
                    <div className="absolute-center">
                      <ArrowDropLeftIcon />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CollectionItem;
