import React, { useState } from "react";
import DummyData from "../containers/DummyNectarCRM";
import { useNavigate } from "react-router-dom";
import { Accordian } from "./Header/Accordian";
import { AccodionPartner } from "./Header/Accordian";
import OfferType from "../containers/OfferType";
import SupportTable from "../containers/SupportTable";

function PricingCard() {
  const [valueSec, setvalueSec] = useState(false);
  const [value, setvalue] = useState(false);
  const [valueFirst, setvalueFirst] = useState(false);
  const [valueThrid, setvalueThrid] = useState(false);

  const handleToggleFirst = () => {
    setvalueFirst(!valueFirst);
    console.log("togglevaluefirst", valueFirst);
  };
  const handleToggleSec = () => {
    setvalueSec(!valueSec);
    console.log("togglevalueSec", valueSec);
  };
  const handleTogglethrid = () => {
    setvalueThrid(!valueThrid);
    console.log("togglevalueSec", valueThrid);
  };

  const handleToggle = (val) => {
    setvalue(!value);
    console.log("togglevalueSec", val);
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
                          onClick={() => handleToggle(data.id)}
                          className="react-switch-checkbox"
                          id={data.id}
                          type="checkbox"
                        />
                        <label
                          className="react-switch-label"
                          htmlFor={data.id}
                        >
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
        </div> */}
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="Toggle_main">
                  <div>
                    <h4>Silver</h4>
                  </div>
                  <div className="switch_toggle  ">
                    <input
                      checked={valueFirst}
                      onClick={handleToggleFirst}
                      className="react-switch-checkbox"
                      id={`react-switch-new-1`}
                      type="checkbox"
                    />
                    <label
                      className="react-switch-label"
                      htmlFor={`react-switch-new-1`}
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
                          {!valueFirst ? <h6>Monthly</h6> : <h6>Yearly</h6>}
                        </div>
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  {!valueFirst ? (
                    <>
                      <div style={{ textAlign: "center", paddingTop: "10px" }}>
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
                      <div style={{ textAlign: "center", paddingTop: "10px" }}>
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
                <div style={{ margin:"0 25px" }}>
                  <button
                    type="submit"
                    class="btn "
                    onClick={() => navigate("/cart")}
                    style={{
                      color: "#F16728",
                      border: " 2px solid #F16728",
                      fontSize: "medium",
                      margin: 5, width:"125px",
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
                      fontSize: "medium", width:"125px",
                    }}
                  >
                    Buy Now
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="Toggle_main">
                  <div>
                    <h4>Silver</h4>
                  </div>
                  <div className="switch_toggle  ">
                    <input
                      checked={valueSec}
                      onClick={handleToggleSec}
                      className="react-switch-checkbox"
                      id={`react-switch-new-2`}
                      type="checkbox"
                    />
                    <label
                      className="react-switch-label"
                      htmlFor={`react-switch-new-2`}
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
                          {!valueSec ? <h6>Monthly</h6> : <h6>Yearly</h6>}
                        </div>
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  {!valueSec ? (
                    <>
                      <div style={{ textAlign: "center", paddingTop: "10px" }}>
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
                      <div style={{ textAlign: "center", paddingTop: "10px" }}>
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
                <div style={{ margin:"0 25px" }}>
                  <button
                    type="submit"
                    class="btn "
                    onClick={() => navigate("/cart")}
                    style={{
                      color: "#F16728",
                      border: " 2px solid #F16728",
                      fontSize: "medium",
                      margin: 5, width:"125px",
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
                      fontSize: "medium", width:"125px",
                    }}
                  >
                    Buy Now
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="Toggle_main">
                  <div>
                    <h4>Silver</h4>
                  </div>
                  <div className="switch_toggle  ">
                    <input
                      checked={valueThrid}
                      onChange={handleTogglethrid}
                      className="react-switch-checkbox"
                      id={`react-switch-new-3`}
                      type="checkbox"
                    />
                    <label
                      className="react-switch-label"
                      htmlFor={`react-switch-new-3`}
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
                          {!valueThrid ? <h6>Monthly</h6> : <h6>Yearly</h6>}
                        </div>
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  {!valueThrid ? (
                    <>
                      <div style={{ textAlign: "center", paddingTop: "10px" }}>
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
                      <div style={{ textAlign: "center", paddingTop: "10px" }}>
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
                <div style={{ margin:"0 25px" }}>
                  <button
                    type="submit"
                    class="btn "
                    onClick={() => navigate("/cart")}
                    style={{
                      color: "#F16728",
                      border: " 2px solid #F16728",
                      fontSize: "medium",
                      margin: 5,
                      width:"125px",
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
                      fontSize: "medium", width:"125px",
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

        <p className="text-center   mb-5 p-4">
        Local taxes (VAT, GST, etc.) will be charged in addition to the prices mentioned. Need assistance? Mail us at abc@nectarinfotel.com
        
        </p>
        <div style={{ borderTop: "2px solid #00000047" }}></div>
      </div>
    </>
  );
}

export default PricingCard;
