import React, { useState } from "react";
import OfferType from "./OfferType";
import "./supportoffer.css";
import SupportTable from "./SupportTable";

const SupportAndOffer = () => {
  const [activeButt, SetActiveButt] = React.useState("home");

  console.log(activeButt);
  const [value, setValue] = useState(false);
  // const handleToggle = () => {
  //   setValue(!value);
  //   console.log("togglevalue", value);
  // };

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-12 col-md-4 mt-2 pl-5">
           <h4 style={{color:"#6F6F6F"}}>
           Support And Offer
           </h4>
          </div>
         <siv className="row">
         <div className="col-lg-6 mb-1">
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
                  Create Offer
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class={`nav-link  ${
                    activeButt === "profile"
                      ? "userTabButton"
                      : "table-nav-link"
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
                  View Active Offer
                </button>
              </li>
            </ul>
          </div>
         </siv>
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
              <SupportTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportAndOffer;
