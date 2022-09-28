import React from "react";
import PricingSubDownCard from "./PricingSubDownCard";
import PricingCard from "../Components/PricingCard";
import PriceFiltering from "../Components/PriceFiltering";
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
      </div>
    </>
  );
};

export default NectarCRMpricesubs;
