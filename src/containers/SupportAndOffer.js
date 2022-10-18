import React, { useState } from "react";
import OfferType from "./OfferType";
import "./supportoffer.css";
import SupportTable from "./SupportTable";

const SupportAndOffer = () => {
  const [activeButt, SetActiveButt] = React.useState("home");

  console.log(activeButt);

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-12 col-md-4 mt-4 mb-3 pl-5">
           <h4>
           Support And Offer
           </h4>
          </div>
         <div className="row">
         <div className="col-lg-6 mb-3">
            <ul class="nav nav-tabs UserTableTabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active table-nav-link"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  partner
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link table-nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Reseller
                </button>
              </li>
            </ul>
          </div>
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
              <SupportTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportAndOffer;
