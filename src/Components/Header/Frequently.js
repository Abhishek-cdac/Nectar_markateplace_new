import React from "react";
import Accordian from "./Accordian";
import Toggle from "./Toggle";

function Frequently() {
  return (
    <section id="faq">
      <div className="container" style={{ justifyContent: "center" }}>
        <div className="row">
          <div className="col-12 col-md-12 col-sm-6  col-xs-3">
            <Toggle />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Frequently;
