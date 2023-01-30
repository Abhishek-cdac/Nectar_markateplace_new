import React from "react";
import MultirangeSlider from "./multiRangeSlider";
import "./multiRangeSlider.css";

function PriceFiltering() {
  return (
    <>
      <div className="">
        <div className="">
          <div className="col-lg-12">
            <h2>
              sort <sup className="sup-head">Filter By</sup>
            </h2>

            <div className="mt-5">
              <b>Choose your prefferd plan</b>
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
              <b>Choose Prefferd Users</b>
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

              <b className="mt-3">Choose Price Range</b>
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
                  $ abc
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
                    $ abc
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
              <div className="mt-4">
                <b>Choose with Rating</b>
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
