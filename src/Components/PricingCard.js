import React, { useState } from "react";
import DummyData from "../containers/DummyNectarCRM";

function PricingCard() {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue(!value);
    console.log("togglevalue", value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {DummyData &&
            DummyData.pricingSubscriptiondata.map((data) => (
              <div className="col-lg-4 col-md-6">
                <div class="card mt-5">
                  <div class="card-body">
                    <h4 class="card-title">
                      <h4>{data.title}</h4>
                    </h4>
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
                </div>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          illo placeat dignissimos voluptates mollitia. Harum, error quisquam
          perspiciatis ratione quo similique a saepe libero, nisi tenetur at
          fugit esse recusandae.
        </p>
      </div>
    </>
  );
}

export default PricingCard;
