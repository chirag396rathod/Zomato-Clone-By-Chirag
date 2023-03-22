import React, { useState } from "react";
import Header from "../../Components/comanComponent/header/index";
import Footer from "../../Components/comanComponent/footer/index";

import TabOptions from "../../Components/comanComponent/tabOptions/index";
import Delivery from "../../Components/delivery/index";
import DiningOut from "../../Components/diningOut/index";
import "./index.css";

function HomePage() {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getActiveTab = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
      case "DiningOut":
        return <DiningOut />;
      default:
        return <Delivery />;
    }
  };

  return (
    <>
      <Header></Header>
      <TabOptions
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></TabOptions>
      {getActiveTab(activeTab)}
      <Footer></Footer>
    </>
  );
}
export default HomePage;
