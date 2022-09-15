import React, { useState } from "react";
import DummyData from "./DummyNectarCRM";
const PricingSubDownCard = () => {
  const [value1, setValue1] = useState(false);
  const handleToggle1 = () => {
    setValue1(!value1);
    console.log("togglevalue", value1);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Results By Filter</h1>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, debitis!
      </p>

      

      <div className="row " >
              <div className="col-lg-4"></div>
              {DummyData &&
                DummyData.carddata.map((data) => (
                  <div className="col-lg-4">
                    <div className="card">
                      <h3 className="mt-3">{data.title}</h3>
                      <div className="Toggle_pricesubsdown  m-4">
                      <div className="switch_toggle">
                        <input
                          checked={value1}
                          onChange={handleToggle1}
                          className="react-switch-checkbox2"
                          id={`react-switch-new`}
                          type="checkbox"
                        />
                        <label
                          className="react-switch-label2"
                          htmlFor={`react-switch-new`}
                        >
                          {" "}
                          <div className="toggleLabel">
                            <h4>Monthly</h4>
                          </div>
                          <div className="toggleLabel">
                            <h4>Yearly</h4>
                          </div>
                          <span className={`react-switch-button2`}>
                            <div className="toggleSwitchLabel2">
                              {!value1 ? <h4>Monthly</h4> : <h4>Yearly</h4>}
                            </div>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>{!value1 ? `$80` : `$160`}</div>
                    
                      <div className="cardcontent">
                        <h3>{data.doller}</h3>
                        <p>{data.dollermonth}</p>
                        <h3>{data.desp}</h3>
                        <button className="buybutton">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="col-lg-4"></div>
            </div>
   
    </>
  );
};

export default PricingSubDownCard;
