import React, { useState } from "react";
import DummyData from "../containers/DummyNectarCRM";
import {useNavigate} from 'react-router-dom'

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
        <div className="row">
          {DummyData &&
            DummyData.pricingSubscriptiondata.map((data) => (
              <div className="col-lg-4 col-md-6">
                <div class="card mt-5">
                  <div class="card-body ProPricingCard">
                    <h4 class="card-title">
                      <h4>{data.title}</h4>
                    </h4>

                    <div className="cardBodyToggle">
                      <h5 class="card-title AdProdManTitle">&12345</h5>
                      <div className="toggle-switch prodPricingtoggle-switch">
                        <input
                          type="checkbox"
                          className="checkbox"
                          name={data.title}
                          id={data.title}
                        />
                        <label
                          className="label ProdPricingCardLabel"
                          htmlFor={data.title}
                        >
                          <span className="inner ProdPricingInner" />
                          <span className="switch ProdPricingCardSwitch" />
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
                    <div style={{ marginLeft: "18%" }}>
                      <button
                        type="submit"
                        class="btn "
                        onClick={() =>navigate("/cart")}
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
                        onClick={() =>navigate("/getproduct")}
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
