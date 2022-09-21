import React from 'react'
import Header2 from './Header/Header2'
import NectarCRMReview from './NectarCRMReview'
import NectarCRMpricesubs from '../containers/NectarCRMpricesubs'
import Productscreen from './productScreen'
import ProductsFooter from './productsFooter'
import NectarGPS from './NectarGPS'
import GPSOverview from './GPSOverview'


function NectarHRMStab() {
  return (
    <>
    {/* <div className="container"> */}
      <div className="row ">
        <Header2/>
        <NectarGPS
            title="Nectar GPS Tracker"
            subtext1="Nectrac GPS Tracker provides vehicle tracking software which does fleet management for commercial or private vehicle owner."
            heading="Get 2 months Free Subscription"
            buttontext="Free Demo"
            buttontext2="Buy Now"
             />
        <div className="container">
        <ul class="nav nav-pills navtabs mb-3" id="pills-tab" role="tablist">
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
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-overview"
            role="tabpanel"
            aria-labelledby="pills-overview-tab"
          >
   <GPSOverview />
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
  
  )
}

export default NectarHRMStab