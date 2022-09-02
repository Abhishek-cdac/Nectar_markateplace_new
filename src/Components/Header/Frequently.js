import React from "react";
import Accordian from "./Accordian";
import Toggle from "./Toggle";

function Frequently() {
  return (
    <div>
      <section id="faq" style={{ height: "240px" }}>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="row">
            <div className="col-12 col-md-12 col-sm-6  col-xs-3">
              <Toggle />
            </div>
          </div>
        </div>
       
      </section>
      <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-sm-6  col-xs-3 ">
              <Accordian />
              <br/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Frequently;
