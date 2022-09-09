import React from "react";
import DummyData from "./DummyNectarCRM";
import { useState } from "react";
import { Accordian, AccodionPartner } from "../Components/Header/Accordian";
const NectarCRMpricesubs = () => {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue(!value);
    console.log("togglevalue", value);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2 p-5">
          <h2>
            sort <sup className="sup-head">Filter By</sup>
          </h2>

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
          {/* <div class="vl p-2"></div> */}
        </div>

        <div className="col-md-10">
          <div className="row ">
            <div className="d-flex  ">
              <div className="justify-content-start col-md-5 ">
                <h2 className=" ">Nectar CRM pricing & plans</h2>
              </div>

              <div className="justify-content-end col-md-5">
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
          </div>
          <div className="row">
            {DummyData &&
              DummyData.pricingSubscriptiondata.map((data) => (
                <div
                  className="col-md-3 pt-3 section-content"
                  style={{ width: 400 }}
                >
                  <h4>{data.title}</h4>
                  <div className="Toggle_pricesubs text-center">
                    <div className="switch_toggle">
                      <input
                        checked={value}
                        onChange={handleToggle}
                        className="react-switch-checkbox"
                        id={`react-switch-new`}
                        type="checkbox"
                      />
                      <label
                        className="react-switch-label"
                        htmlFor={`react-switch-new`}
                      >
                        {" "}
                        <div className="toggleLabel">
                          <h4>Monthly</h4>
                        </div>
                        <div className="toggleLabel">
                          <h4>Yearly</h4>
                        </div>
                        <span className={`react-switch-button`}>
                          <div className="toggleSwitchLabel">
                            {!value ? <h4>Monthly</h4> : <h4>Yearly</h4>}
                          </div>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div style={{ textAlign: "center", fontWeight: "bold", marginTop:"30px" }}>
                    {!value ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <div style={{ textAlign: "center" }}>
                          <h5>{data.doller1}</h5>
                          <p>{data.dolleryearly}</p>
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
                      </>
                    )}
                  </div>
                  {/* <ul class="nav    nav-pills mb-3" id="pills-tab" role="tablist">
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
                  </ul> */}

                  {/* <div class="tab-content" id="pills-tabContent">
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
                  </div> */}
                  {/* <div style={{ textAlign: "center" }}>
                    <h5>{data.doller}</h5>
                    <p>{data.dollermonth}</p>
                    <h3>{data.heading}</h3>
                  </div> */}
                  {/* <div>
                    <p>{data.desp1}</p>
                    <p>{data.desp2}</p>
                    <p>{data.desp3}</p>
                    <p>{data.desp4}</p>
                    <p>{data.desp5}</p>
                    <p>{data.desp6}</p>
                    <p>{data.desp7}</p>
                  </div> */}
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

            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae illo placeat dignissimos voluptates mollitia. Harum,
              error quisquam perspiciatis ratione quo similique a saepe libero,
              nisi tenetur at fugit esse recusandae.
            </p>
            <h1 style={{ textAlign: "center" }}>Results By Filter</h1>

            <p style={{ textAlign: "center" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
              debitis!
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4"></div>
            {DummyData &&
              DummyData.carddata.map((data) => (
                <div className="col-lg-4">
                  <div className="card">
                    <h3 className="mt-3">{data.title}</h3>
                    <ul
                      class="nav    nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                      style={{
                        justifyContent: "center",

                        color: "black",
                      }}
                    >
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
                          style={{ backgroundColor: "#f16728", color: "white" }}
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
                    {/* <ul
                  class="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                  style={{
                    justifyContent: "center",
                    backgroundColor: "#f16728",
                    color: "black",
                  }}
                >
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
                </ul> */}
                    <div className="cardcontent">
                      <h3>{data.doller}</h3>
                      <p>{data.dollermonth}</p>
                      <h3>{data.desp}</h3>
                      <button className="buybutton">Buy Now</button>
                    </div>
                  </div>
                </div>
              ))}
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NectarCRMpricesubs;
