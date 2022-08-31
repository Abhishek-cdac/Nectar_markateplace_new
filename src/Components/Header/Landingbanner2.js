import React from "react";
import Cardmain from "./cardmain";
import Card2 from "./card2";

function Landingbanner2() {
  return (
    <>
      <section id="landing_banner2">
        <div className="container">
          <div className="row">
            <div className ="Col-12">
              <div className="landing_card1">
                <Cardmain/>
              </div>
              <div className="landing_card2">
                <Card2/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landingbanner2;
