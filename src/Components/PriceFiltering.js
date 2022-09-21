import React from "react";
import MultirangeSlider from "./multiRangeSlider";
import "./multiRangeSlider.css";

function PriceFiltering() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>
              sort <sup className="sup-head">Filter By</sup>
            </h2>

            <div className="mt-5">
              <h6>Choose your prefferd plan</h6>
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
              <MultirangeSlider />
              <div className="mt-4 mb-4">
                <label
                  style={{
                    border: "1px solid",
                    padding: "7px",
                    width: "56px",
                    height: "38px",
                  }}
                  for="html"
                >
                  User
                </label>
                <span>&nbsp;&nbsp;To&nbsp;&nbsp;</span>
                <span>
                  {" "}
                  <label
                    style={{
                      border: "1px solid",
                      padding: "7px",
                      width: "56px",
                      height: "38px",
                    }}
                    for="html"
                  >
                    User
                  </label>
                </span>
                <span>
                  <button
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#F16727",
                      color: "#fff",
                      border: "none",
                      height: "38px",
                      width: "38px",
                    }}
                  >
                    Go
                  </button>
                </span>
              </div>

              <h6 className="mt-3">Choose Price Range</h6>
              <MultirangeSlider />
              <div className="mt-4">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceFiltering;
