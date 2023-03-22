import React from "react";
import Filter from "../comanComponent/filters";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DeliveryCollection from "./deliveryCollection";
import TopBrands from "./topBrand";
import ExploreSection from "../comanComponent/exploreSection";
import restaurants from "../../Data/restorents";

const Delivery = () => {
  const deliveryFilter = [
    {
      id: "1",
      icon: (
        <img
          src="https://img.icons8.com/material-two-tone/24/000000/filtered-file.png"
          alt="icons"
        />
      ),
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
      icon: <ArrowDropDownIcon />,
      title: "Cuisines",
    },
    {
      id: "6",
      title: "Great Offers",
    },
  ];

  return (
    <div>
      <div className="max-width">
        <Filter FilterList={deliveryFilter} />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        exploreList={restaurants}
        collectionName="Delivery Restaurants in Bangur"
      />
    </div>
  );
};

export default Delivery;
