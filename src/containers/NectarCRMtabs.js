import React from "react";
import NectarCRMoverview from "./NectarCRMoverview";
import NectarCRMpricesubs from "./NectarCRMpricesubs";
import Productscreen from "../Components/productScreen";
import NectarCRMReview from "../Components/NectarCRMReview";
import CRM from "../Components/CRM";
import ProductsFooter from "../Components/productsFooter";
import Header2 from "../Components/Header/Header2";

const NectarCRMtabs = ( ) => {
  return (
    <>
      {/* <div className="container"> */}
      <div className="row ">
        <Header2 />

        <CRM
          title="Nectar CRM"
          subtext1="The easy to use and customizable CRM for your Marketing, Sales,
            & Customer Service Teams."
          item1="Better Sales Performance"
          item2="Increased Profitability & Efficiency "
          item3="CRM Improves Your Customer Service"
          heading="Get 2 months Free Subscription"
          buttontext="Free Demo"
          buttontext2="Buy Now"
        />
        <div className="container" style={{marginLeft:"20px"}}>
          <ul class="nav nav-pills navtabs mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                color="red"
                class="nav-link  productTabs active productTabs"
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
                class="nav-link  productTabs"
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
                class="nav-link  productTabs "
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
                class="nav-link  productTabs"
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
        </div>
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
            <Productscreen />
          </div>
          <div
            class="tab-pane fade"
            id="pills-review"
            role="tabpanel"
            aria-labelledby="pills-review-tab"
          >
            <NectarCRMReview />
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
      <ProductsFooter />
      {/* </div> */}
    </>
  );
};

export default NectarCRMtabs;
