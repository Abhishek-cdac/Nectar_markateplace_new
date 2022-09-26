import React from 'react'
import Header2 from './Header/Header2'
import CRM from './CRM'
import NectarCRMoverview from '../containers/NectarCRMoverview'
import NectarCRMReview from './NectarCRMReview'
import NectarCRMpricesubs from '../containers/NectarCRMpricesubs'
import Productscreen from './productScreen'
import ProductsFooter from './productsFooter'
import NectarHRMS from './NectarHRMS'
import HRMS from './HRMS'
import NectarGPS from './NectarGPS'
import GPSOverview from './GPSOverview'
import NerroTrac from './NerroTrac'
import NerroTracOverview from './NerroTracOverview'
import Contact from "../assets/Contact.png"
import ITSMTool from './ITSMTool'
import NT3Overview from './NT3Overview'


function NectarHRMStab() {
  return (
    <>
      {/* <div className="container"> */}
      <div className="row ">
        <Header2 />
        <ITSMTool
            title="NT3 - ITSM Tool"
            subtext1="Implement ITIL best practice with the guidance of NT3."
            item1="Incident, Problem & Change Management"
            item2="Rapid access to key IT information "
            item3="Manage your service commitments & increase user satisfaction"
            item4="mprove the performance of your IT teams"
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
          <NT3Overview />
            <div className='container'>
            <div class="midsec">
              <div className="row">
                <div class="col-md-6">
                  <img className="img-fluid" src={Contact} alt="" />
                </div>
                <div class="midform p-5 col-md-6" >
                  <h3 style={{ color: "#08668F" }}>We Would Love To Hear From You!</h3>
                  <div class="border-bottom border-secondary border-1" >
                    <label for="exampleInputEmail1">Full Name</label>
                  </div>
                  <div class="border-bottom border-secondary" >
                    <label for="exampleInputPassword1">Email ID</label>
                  </div>
                  <div class="border-bottom border-secondary" >
                    <label for="exampleInputPassword1">Password</label>
                  </div>
                  <div class="border-bottom border-secondary">
                    <label for="exampleInputPassword1">Contact Number</label>
                  </div>
                  <div>
                    <p class="midpara"  >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis expedita fugit quae quo minima aliquam. Veniam
                      doloremque nesciunt distinctio asperiores pariatur.
                    </p>
                  </div>

                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      I agree to the Terms of Service, Marketplace Terms of Use
                      and Privacy Policy.
                    </label>
                  </div>
                  <div className="gap-2 pt-4 d-md-flex justify-content-md-center">
                    <button type="submit" class="btn   float-center midbutton">
                      Submit
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
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