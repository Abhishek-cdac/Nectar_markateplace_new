import React from "react";
import NectarCRMoverview from "./NectarCRMoverview";
import NectarCRMpricesubs from "./NectarCRMpricesubs";
import NectarCRMproductscreen from "./NectarCRMproductscreen";
import NectarCRMreviews from "./NectarCRMreviews";

const NectarCRMtabs = () => {
  return (
    <>
      <div className="container ">
        <div className="row ">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                color="red"
                class="nav-link active"
                id="pills-overview-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-overview"
                type="button"
                role="tab"
                aria-controls="pills-overview"
                aria-selected="true"
              >
                Overview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                color="orange"
                appearance="link"
                class="nav-link"
                id="pills-productscreen-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-productscreen"
                type="button"
                role="tab"
                aria-controls="pills-productscreen"
                aria-selected="false"
              >
                Product Screen
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link "
                id="pills-review-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-review"
                type="button"
                role="tab"
                aria-controls="pills-review"
                aria-selected="false"
              >
                Review
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-pricingsubs-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-pricingsubs"
                type="button"
                role="tab"
                aria-controls="pills-pricingsubs"
                aria-selected="false"
              >
                Pricing & Subscription
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-overview"
              role="tabpanel"
              aria-labelledby="pills-overview-tab"
            >
               <NectarCRMoverview />
            </div>
            <div
              class="tab-pane fade"
              id="pills-productscreen"
              role="tabpanel"
              aria-labelledby="pills-productscreen-tab"
            >
              <NectarCRMproductscreen />
            </div>
            <div
              class="tab-pane fade"
              id="pills-review"
              role="tabpanel"
              aria-labelledby="pills-review-tab"
            >
              <NectarCRMreviews />
            </div>
            <div
              class="tab-pane "
              id="pills-pricingsubs"
              role="tabpanel"
              aria-labelledby="pills-pricingsubs-tab"
            >
              <NectarCRMpricesubs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NectarCRMtabs;
