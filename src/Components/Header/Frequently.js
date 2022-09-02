import React from "react";
import Toggle from "./Toggle";

function Frequently() {
  return (
    <div>
      <section id="faq" style={{height:"420px"}}>
        <div className="container" style={{display:"flex",justifyContent:"center"}}>
          <div className="row">
            <div className="Col-12">
              <Toggle />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Frequently;
