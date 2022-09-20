import React from "react";
import PricingSubDownCard from "./PricingSubDownCard";
import PricingCard from "../Components/PricingCard";
import PriceFiltering from "../Components/PriceFiltering";
import Card2 from "../Components/Header/card2"
import Footer from "../Components/Footer";
const NectarCRMpricesubs = () => {

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-2" style={{borderRight:"1px solid #474747"}}>
            <PriceFiltering />
          </div>
          <div className="col-lg-10">
            <PricingCard />
            <PricingSubDownCard />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="landing_card3" style={{ marginBottom: "10%" }}>
              <h1>Explore Nectar's related apps</h1>
              <Card2 />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NectarCRMpricesubs;
