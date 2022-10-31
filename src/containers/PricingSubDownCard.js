import React, { useState } from "react";
import DummyData from "./DummyNectarCRM";
const PricingSubDownCard = () => {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue(!value);
    console.log("togglevalue", value);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Results By Filter</h1>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, debitis!
      </p>
      <div className="row ">
        <div className="col-lg-4"></div>
        {DummyData &&
          DummyData.carddata.map((data) => (
            <div className="col-lg-4">
              <div className="card text-center mb-5">
                <h4 className="mt-3">{data.title}</h4>
                <div className="Toggle_pricesubsdown mx-5">
                  <div className="switch_toggle">
                    <input
                      className="react-switch-checkbox2"
                      id={data.title}
                      type="checkbox"
                      checked={value}
                      onChange={handleToggle}
                    />
                    <label
                      className="react-switch-label2"
                      htmlFor={data.title}
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
                          {!value ? <h4>Monthly</h4> : <h4>Yearly</h4>}
                        </div>
                      </span>
                    </label>
                  </div>
                </div>
                {/* <div>{!value ? `$80` : `$160`}</div> */}

                <div className="cardcontent" style={{backgroundColor:"#474747",padding:"2em",opacity:"0.66"}}>
                  <h4>{data.doller}</h4>
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
