import React from "react";
import ClientSays from "../Components/Header/ClientSays";
import Frequently from "../Components/Header/Frequently";
import LandingBanner from "../Components/Header/LandingBanner";
import Card2 from "../Components/Header/card2";

function PartnerDashboard() {
  return (
    <div id="layoutSidenavContent">
      <div className="container-fluid">
      <section id="product-footer-card">
        <div className="container product-container-footer">
          <div className="product-footer-heading">
            <h3>Explore Nectar's Related Apps</h3>
          </div>
          <div className="bottom-card">
            <Card2 />
          </div>
        </div>
      </section>
        <Frequently />
        <ClientSays />
       
      </div>
    </div>
  );
}

export default PartnerDashboard;
