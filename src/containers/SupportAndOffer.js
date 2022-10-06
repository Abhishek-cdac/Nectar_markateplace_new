import React, { useState } from "react";
import OfferType from "./OfferType";
import "./supportoffer.css";
import SupportTable from "./SupportTable";

const SupportAndOffer = () => {

  const [activeButt, SetActiveButt] = React.useState("home");

  console.log(activeButt);
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


          <ul class="nav nav-tabs UserTableTabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class={`nav-link active ${
              activeButt === "home" ? "userTabButton" : "table-nav-link"
            } `}
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => {
              SetActiveButt("home");
            }}
          >
            partner
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class={`nav-link  ${
              activeButt === "profile" ? "userTabButton" : "table-nav-link"
            } `}
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            onClick={() => {
              SetActiveButt("profile");
            }}
          >
            Reseller
          </button>
        </li>
      </ul>
          {/* <div className="switch_toggle">
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
            </div> */}
          </div>
          <hr className="bg-dark bold"></hr>
          <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
      <OfferType />
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
         <SupportTable  /> 
        </div>
      </div>
        </div>
     
      </div>
    </>
  );
};

export default SupportAndOffer;
