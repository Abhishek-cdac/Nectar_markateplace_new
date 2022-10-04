import React, { useState } from "react";
import OfferType from "./OfferType";
import "./supportoffer.css";
import SupportTable from "./SupportTable";

const SupportAndOffer = () => {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue(!value);
    console.log("togglevalue", value);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-2 col-md-4 mt-4 mb-3 pl-5">
            Support And Offer
          </div>
          <div className="col-lg-6 mb-3">
          <div className="switch_toggle">
              <input
                checked={value}
                onChange={handleToggle}
                className="react-switch-checkbox3"
                id={`react-switch-new`}
                type="checkbox"
              />
              <label
                className="react-switch-label3"
                htmlFor={`react-switch-new`}
              >
                {" "}
                <div className="toggleLabel">
                  <h6>Create Offer</h6>
                </div>
                <div className="toggleLabel">
                  <h6>View Active Offers</h6>
                </div>
                <span className={`react-switch-button`}>
                  <div className="toggleSwitchLabel3">
                    {!value ? (
                      <h6>Create Offer</h6>
                    ) : (
                      <h6>View Active Offers</h6>
                    )}
                  </div>
                </span>
              </label>
            </div>
          </div>
          <hr className="bg-dark bold"></hr>
          <div>{!value ? <OfferType /> : <SupportTable />}</div>
        </div>
     
      </div>
    </>
  );
};

export default SupportAndOffer;
