import React from "react";
import DummyData from "./DummyNectarCRM";

const NectarCRMpricesubs = () => {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-12 pr-3">
            <h2>sort</h2>

            <div>
              <h6 className="pt-5">Choose your prefferd plan</h6>
              <input type="checkbox" id="plan1" name="plan1" />
              <label for="plan1"> Silver</label>
              <br />
              <input type="checkbox" id="plan2" name="plan2" />
              <label for="plan2"> Gold</label>
              <br />
              <input type="checkbox" id="plan3" name="plan3" />
              <label for="plan3"> Platinum</label>
              <br />
              <br />
              <h6>Choose Prefferd Users</h6>
              <h6>Choose Price Range</h6>
              <div>
                <h6>Choose with Rating</h6>
                <div>
                  <input type="checkbox" id="plan1" name="plan1" />

                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <input type="checkbox" id="plan1" name="plan1" />
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <input type="checkbox" id="plan1" name="plan1" />
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <input type="checkbox" id="plan1" name="plan1" />

                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div>
                  <input type="checkbox" id="plan1" name="plan1" />

                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vl p-2"></div>

        <div className="col-8">
          <div className="nectarhead">
            <h2 className=" ">Nectar CRM pricing & plans</h2>

            <div>
              <span
                className="pt-2  "
                style={{
                  marginLeft: 60,
                  backgroundColor: "#F16728",
                  height: 50,
                  width: 400,
                  border: "5px dashed #F16728",
                }}
              >
                Get 20%off on yearly subscrition
              </span>
            </div>
          </div>
          <div className="row">
            {DummyData &&
              DummyData.pricingSubscriptiondata.map((data) => (
                <div className="col-3 pt-3 section-content">
                  <h6>{data.title}</h6>
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Monthly
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Yearly
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      ...
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      ...
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h5>{data.doller}</h5>
                    <p>{data.dollermonth}</p>
                    <h3>{data.heading}</h3>
                  </div>
                  <div>
                    <p>{data.desp1}</p>
                    <p>{data.desp2}</p>
                    <p>{data.desp3}</p>
                    <p>{data.desp4}</p>
                    <p>{data.desp5}</p>
                    <p>{data.desp6}</p>
                    <p>{data.desp7}</p>
                  </div>
                  <div style={{ borderTop: "2px dashed #00000047" }}></div>
                  <br />
                  <div
                    style={{
                      backgroundColor: "#E6EC90",
                      fontSize: "14px",
                      fontFamily: "Open Sans",
                    }}
                  >
                    <p>{data.desp8}</p>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="btn"
                      style={{
                        color: "#F16728",
                        border: " 1px solid #F16728",
                        fontSize: "12px",
                        margin: 5,
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      type="submit"
                      class="btn"
                      style={{
                        color: "#F16728",
                        border: " 1px solid #F16728",
                        fontSize: "12px",
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                  <br />
                </div>
                
              ))}
                
              
          </div>
        
        </div>
      </div>
    </>
  );
};

export default NectarCRMpricesubs;
