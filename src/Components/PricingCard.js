import React, { useState } from "react";
import DummyData from "../containers/DummyNectarCRM";
import { useNavigate } from "react-router-dom";
import { Accordian } from "./Header/Accordian";
import { AccodionPartner } from "./Header/Accordian";
import OfferType from "../containers/OfferType";
import SupportTable from "../containers/SupportTable";

function PricingCard() {
  const [value, setValue] = useState(false);

  const handleToggle = () => {
    setValue(!value);
    console.log("togglevalue", value);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
       
         {/* <div className="row">
          {DummyData &&
            DummyData.pricingSubscriptiondata.map((data) => (
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="Toggle_main">
                      <div>
                        <h4>{data.title}</h4>
                      </div>
                      <div className="switch_toggle  ">
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
                            <h6>Monthly</h6>
                          </div>
                          <div className="toggleLabel">
                            <h6>Yearly</h6>
                          </div>
                          <span className={`react-switch-button`}>
                            <div className="toggleSwitchLabel">
                              {!value ? <h6>Monthly</h6> : <h6>Yearly</h6>}
                            </div>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      {!value ? (
                        <>
                          <div
                            style={{ textAlign: "center", paddingTop: "10px" }}
                          >
                            <h5>{data.doller}</h5>
                            <p>{data.dollermonth}</p>
                            <h3>{data.heading}</h3>
                          </div>
                          <div>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
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
                          <div
                            style={{ textAlign: "center", paddingTop: "10px" }}
                          >
                            <h5>{data.doller1}</h5>
                            <p>{data.dolleryearly}</p>
                            <h3>{data.heading}</h3>
                          </div>
                          <div>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
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
                    <div style={{ marginLeft: "18%" }}>
                      <button
                        type="submit"
                        class="btn "
                        onClick={() => navigate("/cart")}
                        style={{
                          color: "#F16728",
                          border: " 2px solid #F16728",
                          fontSize: "medium",
                          margin: 5,
                        }}
                      >
                        Add to Cart
                      </button>
                      <button
                        type="submit"
                        class="btn"
                        onClick={() => navigate("/getproduct")}
                        style={{
                          color: "#F16728",
                          border: " 2px solid #F16728",
                          fontSize: "medium",
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            ))}
                  
        </div>  */}
        <div className="row">
          <div className="col">
          <div className="card">
                  <div className="card-body">
                    <div className="Toggle_main">
                      <div>
                        <h4>Silver</h4>
                      </div>
                      <div className="switch_toggle  ">
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
                            <h6>Monthly</h6>
                          </div>
                          <div className="toggleLabel">
                            <h6>
                              Yearly
                            </h6>
                          </div>
                          <span className={`react-switch-button`}>
                            <div className="toggleSwitchLabel">
                              {!value ? <h6>Monthly</h6> : <h6>Yearly</h6>}
                            </div>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      {!value ? (
                        <>
                          <div style={{ textAlign: "center" ,paddingTop:"10px"}}>
                            <h5>$200</h5>
                            <p>per month</p>
                            <h3>Benefit</h3>
                          </div>
                          <div>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Bandwith with 5 user
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              24/7 support
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              4 customer onboard
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              CPU for 500
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              personal hosting
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              speed for thr deeling
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Easy to get
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                           <div style={{ textAlign: "center" ,paddingTop:"10px"}}>
                            <h5>$200</h5>
                            <p>per year</p>
                            <h3>Benefit</h3>
                          </div>
                          <div>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Bandwith with 5 user
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              24/7 support
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              4 customer onboard
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              CPU for 500
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              personal hosting
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              speed for thr deeling
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Easy to get
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
                      <p>$35 whrn you renew the product</p>
                    </div>
                    <div style={{ marginLeft: "18%" }}>
                      <button
                        type="submit"
                        class="btn "
                        onClick={() => navigate("/cart")}
                        style={{
                          color: "#F16728",
                          border: " 2px solid #F16728",
                          fontSize: "medium",
                          margin: 5,
                        }}
                      >
                        Add to Cart
                      </button>
                      <button
                        type="submit"
                        class="btn"
                        onClick={() => navigate("/getproduct")}
                        style={{
                          color: "#F16728",
                          border: " 2px solid #F16728",
                          fontSize: "medium",
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                    <br />
             
                  </div>
                </div>
          </div>
          <div className="col">
          <div className="card">
                  <div className="card-body">
                    <div className="Toggle_main">
                      <div>
                        <h4>Silver</h4>
                      </div>
                      <div className="switch_toggle  ">
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
                            <h6>Monthly</h6>
                          </div>
                          <div className="toggleLabel">
                            <h6>




                              Yearly
                            </h6>
                          </div>
                          <span className={`react-switch-button`}>
                            <div className="toggleSwitchLabel">
                              {!value ? <h6>Monthly</h6> : <h6>Yearly</h6>}
                            </div>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      {!value ? (
                        <>
                          <div style={{ textAlign: "center" ,paddingTop:"10px"}}>
                            <h5>$200</h5>
                            <p>per month</p>
                            <h3>Benefit</h3>
                          </div>
                          <div>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Bandwith with 5 user
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              24/7 support
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              4 customer onboard
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              CPU for 500
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              personal hosting
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              speed for thr deeling
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Easy to get
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                           <div style={{ textAlign: "center" ,paddingTop:"10px"}}>
                            <h5>$200</h5>
                            <p>per year</p>
                            <h3>Benefit</h3>
                          </div>
                          <div>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Bandwith with 5 user
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              24/7 support
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              4 customer onboard
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              CPU for 500
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              personal hosting
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              speed for thr deeling
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Easy to get
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
                      <p>$35 whrn you renew the product</p>
                    </div>
                    <div style={{ marginLeft: "18%" }}>
                      <button
                        type="submit"
                        class="btn "
                        onClick={() => navigate("/cart")}
                        style={{
                          color: "#F16728",
                          border: " 2px solid #F16728",
                          fontSize: "medium",
                          margin: 5,
                        }}
                      >
                        Add to Cart
                      </button>
                      <button
                        type="submit"
                        class="btn"
                        onClick={() => navigate("/getproduct")}
                        style={{
                          color: "#F16728",
                          border: " 2px solid #F16728",
                          fontSize: "medium",
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                    <br />
             
                  </div>
                </div>
          </div>
          <div className="col">
          <div className="card">
                  <div className="card-body">
                    <div className="Toggle_main">
                      <div>
                        <h4>Silver</h4>
                      </div>
                      <div className="switch_toggle  ">
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
                            <h6>Monthly</h6>
                          </div>
                          <div className="toggleLabel">
                            <h6>
                              Yearly
                            </h6>
                          </div>
                          <span className={`react-switch-button`}>
                            <div className="toggleSwitchLabel">
                              {!value ? <h6>Monthly</h6> : <h6>Yearly</h6>}
                            </div>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      {!value ? (
                        <>
                          <div style={{ textAlign: "center" ,paddingTop:"10px"}}>
                            <h5>$200</h5>
                            <p>per month</p>
                            <h3>Benefit</h3>
                          </div>
                          <div>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Bandwith with 5 user
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              24/7 support
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              4 customer onboard
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              CPU for 500
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              personal hosting
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              speed for thr deeling
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Easy to get
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                           <div style={{ textAlign: "center" ,paddingTop:"10px"}}>
                            <h5>$200</h5>
                            <p>per year</p>
                            <h3>Benefit</h3>
                          </div>
                          <div>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Bandwith with 5 user
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              24/7 support
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              4 customer onboard
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              CPU for 500
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click  mx-3 "></span>
                              personal hosting
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              speed for thr deeling
                            </p>
                            <p>
                              {" "}
                              <span className="fa-solid fa-check-double double_click mx-3 "></span>
                              Easy to get
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
                      <p>$35 whrn you renew the product</p>
                    </div>
                    <div style={{ marginLeft: "18%" }}>
                      <button
                        type="submit"
                        class="btn "
                        onClick={() => navigate("/cart")}
                        style={{
                          color: "#F16728",
                          border: " 2px solid #F16728",
                          fontSize: "medium",
                          margin: 5,
                        }}
                      >
                        Add to Cart
                      </button>
                      <button
                        type="submit"
                        class="btn"
                        onClick={() => navigate("/getproduct")}
                        style={{
                          color: "#F16728",
                          border: " 2px solid #F16728",
                          fontSize: "medium",
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                    <br />
             
                  </div>
                </div>
          </div>
          
        </div>
       
        <p className="text-center mt-5 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          illo placeat dignissimos voluptates mollitia. Harum, error quisquam
          perspiciatis ratione quo similique a saepe libero, nisi tenetur at
          fugit esse recusandae.
        </p>
        <div style={{ borderTop: "2px solid #00000047" }}></div>
      </div>
    </>
  );
}

export default PricingCard;
