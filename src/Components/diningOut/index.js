import React from "react";
import Collection from "../comanComponent/collections";
import dining from "../../Data/restorents";
import Filter from "../comanComponent/filters";
import ExploreSection from "../comanComponent/exploreSection";

const diningFilter = [
  {
    id: "1",
    title: "Filters",
  },
  {
    id: "2",
    title: "Delivery Time",
  },
  {
    id: "3",
    title: "Rating 4.0+",
  },
  {
    id: "4",
    title: "pure veg",
  },
  {
    id: "5",
    title: "Cuisines",
  },
  {
    id: "6",
    title: "Great Offers",
  },
];
const CollectionList = [
  {
    id: "1",
    name: "Live Cricket Screening",
    cover:
      "https://b.zmtcdn.com/data/collections/e2ceb701e81a8113eab9627069f6f6bf_1649144914.jpg",
    place: "33 Places",
  },
  {
    id: "2",
    name: "Ramadan Specials",
    cover:
      "https://b.zmtcdn.com/data/collections/15242b397d79d3498922b4779231c850_1555421190.jpg",
    place: "11 Places",
  },
  {
    id: "3",
    name: "Newly Opened",
    cover:
      "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015799.jpg",
    place: "13 Places",
  },
  {
    id: "4",
    name: "Trending This Week",
    cover:
      "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040552.png",
    place: "30 Places",
  },
  {
    id: "5",
    name: "Best of Kolkata",
    cover:
      "https://b.zmtcdn.com/data/collections/712ee166f48312fa572eac04f5b71d59_1615435760.jpg",
    place: "60 Places",
  },
  {
    id: "6",
    name: "Brilliant Biryani",
    cover:
      "https://b.zmtcdn.com/data/collections/d66334f10b958a3ca6df9f4e4d7a881c_1631862999.jpg",
    place: "30 Places",
  },
  {
    id: "6",
    name: "Aromatic Coffee",
    cover:
      "https://b.zmtcdn.com/data/collections/2e0b63986e33036c45cf17fef3a740ac_1611749485.jpg",
    place: "29 Places",
  },
  {
    id: "7",
    name: "Street Food",
    cover:
      "https://b.zmtcdn.com/data/collections/4c59b895acfa4879b87f6c1d81ca5855_1615437858.jpg",
    place: "25 Places",
  },
];

const DiningOut = () => {
  return (
    <div>
      <Collection list={CollectionList} />
      <div className="max-width">
        <Filter FilterList={diningFilter} />
      </div>
      <ExploreSection
        exploreList={dining}
        collectionName="Dine-Out Restaurants in Bangur"
      />
    </div>
  );
};

export default DiningOut;
