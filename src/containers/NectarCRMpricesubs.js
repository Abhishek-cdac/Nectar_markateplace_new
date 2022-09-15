import React from "react";
import DummyData from "./DummyNectarCRM";
import { useState } from "react";
import { Accordian, AccodionPartner } from "../Components/Header/Accordian";
import CRM from "../Components/CRM";
import PricingSubDownCard from "./PricingSubDownCard";
const NectarCRMpricesubs = () => {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue(!value);
    console.log("togglevalue", value);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-2 p-4">
            <h2>
              sort <sup className="sup-head">Filter By</sup>
            </h2>

            <div>
              <h6 className="pt-5">Choose your prefferd plan</h6>
              <input type="checkbox" id="plan1" name="plan1" />
              <label for="plan1" style={{ marginLeft: "10px" }}>
                {" "}
                Silver
              </label>
              <br />
              <input type="checkbox" id="plan2" name="plan2" />
              <label for="plan2" style={{ marginLeft: "10px" }}>
                {" "}
                Gold
              </label>
              <br />
              <input type="checkbox" id="plan3" name="plan3" />
              <label for="plan3" style={{ marginLeft: "10px" }}>
                {" "}
                Platinum
              </label>
              <br />
              <br />
              <h6>Choose Prefferd Users</h6>
              <span>
                <label
                  style={{
                    border: "1px solid",
                    padding: "10px",
                    width: "70px",
                    height: "45px",
                  }}
                  for="html"
                >
                  User
                </label>
                <p>To</p>
              </span>

              <h6>Choose Price Range</h6>
              <div>
                <h6>Choose with Rating</h6>
                <div>
                  <input type="checkbox" id="plan1" name="plan1" />

                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <input type="checkbox" id="plan1" name="plan1" />
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <input type="checkbox" id="plan1" name="plan1" />
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                </div>

                <div>
                  <input type="checkbox" id="plan1" name="plan1" />

                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <div>
                  <input type="checkbox" id="plan1" name="plan1" />

                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-star"
                    style={{ color: "#FF9900", marginLeft: "10px" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
            {/* <div class="vl p-2"></div> */}
          </div>
          <div className="row ">
            <div className="d-flex  ">
              <div className="col-lg-5 ">
                <h2 className=" ">Nectar CRM pricing & plans</h2>
              </div>

              <div className="col-lg-5">
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
          <div className="col-lg-10">
            <div className="row">
              {DummyData &&
                DummyData.pricingSubscriptiondata.map((data) => (
                  <div className="col-lg-4 pt-3 section-content">
                    <h4>{data.title}</h4>
                    <div className="Toggle_pricesubs text-center">
                      <div className="switch_toggle">
                        <input
                          checked={value}
                          onChange={handleToggle}
                          className="react-switch-checkbox1"
                          id={`react-switch-new`}
                          type="checkbox"
                        />
                        <label
                          className="react-switch-label1"
                          htmlFor={`react-switch-new`}
                        >
                          {" "}
                          <div className="toggleLabel">
                            <h4>Monthly</h4>
                          </div>
                          <div className="toggleLabel">
                            <h4>Yearly</h4>
                          </div>
                          <span className={`react-switch-button1`}>
                            <div className="toggleSwitchLabel1">
                              {!value ? <h4>Monthly</h4> : <h4>Yearly</h4>}
                            </div>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: "30px",
                      }}
                    >
                      {!value ? (
                        <>
                          <div style={{ textAlign: "center" }}>
                            <h5>{data.doller}</h5>
                            <p>{data.dollermonth}</p>
                            <h3>{data.heading}</h3>
                          </div>
                          <div>
                            {/* <i class="fa-regular fa-check-double"></i> */}
                            <p>
                              {" "}
                              <span className="fa-regular fa-check-double double_click mx-3 "></span>{" "}
                              {data.desp1}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              {data.desp2}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              {data.desp3}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              {data.desp4}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              {data.desp5}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              {data.desp6}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              {data.desp7}
                            </p>
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
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double  double_click mx-3 "></span>
                              {data.desp1}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              {data.desp2}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              {data.desp3}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              {data.desp4}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              {data.desp5}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              {data.desp6}
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              {data.desp7}
                            </p>
                          </div>
                        </>
                      )}
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
                    <div style={{ marginLeft: 50 }}>
                      <button
                        type="submit"
                        class="btn "
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
                error quisquam perspiciatis ratione quo similique a saepe
                libero, nisi tenetur at fugit esse recusandae.
              </p>
            </div>
            <PricingSubDownCard />

            {/* <div className="Toggle_pricesubs text-center">
                      <div className="switch_toggle">
                        <input
                          checked={value}
                          onChange={handleToggle}
                          className="react-switch-checkbox1"
                          id={`react-switch-new`}
                          type="checkbox"
                        />
                        <label
                          className="react-switch-label1"
                          htmlFor={`react-switch-new`}
                        >
                          {" "}
                          <div className="toggleLabel">
                            <h4>Monthly</h4>
                          </div>
                          <div className="toggleLabel">
                            <h4>Yearly</h4>
                          </div>
                          <span className={`react-switch-button1`}>
                            <div className="toggleSwitchLabel1">
                              {!value ? <h4>Monthly</h4> : <h4>Yearly</h4>}
                            </div>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>{!value ? `$80` : `$160`}</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NectarCRMpricesubs;
