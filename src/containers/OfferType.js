import React from "react";
import "./supportoffer.css";
const OfferType = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <div className="row">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Offer Type:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <select
                    id="disabledSelect"
                    class="form-select mx-2"
                    style={{ width: "100%" }}
                  >
                    <option>Promocode</option>
                    <option>Nectar HRMS</option>
                    <option>Nectar GPS Tracker</option>
                    <option>nDatu - Task Manager</option>
                    <option>Nerro Trac-Bug Tracker</option>
                    <option>NT3-ITSM Tool</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Offer Validation:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <select
                    id="disabledSelect"
                    class="form-select mx-2"
                    style={{ width: "100%" }}
                  >
                    <option>3 Months</option>
                    <option>Nectar HRMS</option>
                    <option>Nectar GPS Tracker</option>
                    <option>nDatu - Task Manager</option>
                    <option>Nerro Trac-Bug Tracker</option>
                    <option>NT3-ITSM Tool</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Product Offer:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <select
                    id="disabledSelect"
                    class="form-select mx-2"
                    style={{ width: "100%" }}
                  >
                    <option>Nectar HRMS</option>
                    <option>Nectar HRMS</option>
                    <option>Nectar GPS Tracker</option>
                    <option>nDatu - Task Manager</option>
                    <option>Nerro Trac-Bug Tracker</option>
                    <option>NT3-ITSM Tool</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Price Offer:{" "}
                </label>
              </div>
              <div className="col-lg-9" >
                <div class="mb-3 m-2" >
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      $
                    </span>
                    <input
                  
                      type="text"
                      class="form-control "
                      placeholder="2133.23"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  {/* <select
                    id="disabledSelect"
                    class="form-select mx-2"
                    style={{ width: "100%" }}
                  >
                    <option>1234.5</option>
                    <option>Nectar HRMS</option>
                    <option>Nectar GPS Tracker</option>
                    <option>nDatu - Task Manager</option>
                    <option>Nerro Trac-Bug Tracker</option>
                    <option>NT3-ITSM Tool</option>
                  </select> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <div className="row">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Offer Type Details:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <select
                    id="disabledSelect"
                    class="form-select mx-2"
                    style={{ width: "100%" }}
                  >
                    <option>Promocode</option>
                    <option>Nectar HRMS</option>
                    <option>Nectar GPS Tracker</option>
                    <option>nDatu - Task Manager</option>
                    <option>Nerro Trac-Bug Tracker</option>
                    <option>NT3-ITSM Tool</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Offer Valid Date:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <input
                    type="date"
                    style={{
                      margin: "0px 8px",
                      padding: "6px 36px 6px 12px",
                      background: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                    }}
                  />
                  <span>Up to</span>
                  <span>
                    <input
                      type="date"
                      style={{
                        margin: "0px 8px",
                        padding: "6px 36px 6px 12px",
                        background: "#fff",
                        border: "1px solid lightgray",
                        borderRadius: "5px",
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Partner's Product:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <select
                    id="disabledSelect"
                    class="form-select mx-2"
                    style={{ width: "100%" }}
                  >
                    <option>Wipro Bug Tracker</option>
                    <option>Nectar HRMS</option>
                    <option>Nectar GPS Tracker</option>
                    <option>nDatu - Task Manager</option>
                    <option>Nerro Trac-Bug Tracker</option>
                    <option>NT3-ITSM Tool</option>
                  </select>
                  <p className="mt-1 mx-2">Or Type slowly for your result</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Offer Valid Date:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <input
                    type="date"
                    value="2018-07-22"
                    placeholder="31/12/2021 | 12:00 AM"
                    style={{
                      margin: "0px 8px",
                      padding: "6px 36px 6px 12px",
                      background: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row mt-5"
          style={{ border: "3px dashed gray", padding: "5%" }}
        >
          <div
            className="col-lg-5"
            style={{ border: "1px solid gray", padding: "5%" }}
          >
            <div className="text-center" style={{ color: "#2D9CCE" }}>
              <i class="fa-solid fa-upload fa-5x"></i>
              <h6 className="mt-3">Upload Your Image Here</h6>
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <h2 className="text-center mt-3">Or Drag and Drop the Images</h2>
            <p className="text-center">
              Maximum file size should not more than 10mb{" "}
            </p>
          </div>
        </div>
        <div
          className="gap-2  d-md-flex justify-content-md-center"
          style={{ paddingTop: "80px" }}
        >
          <button
            type="submit"
            className="btn float-center mb-5"
            style={{
              width: "200px",
              backgroundColor: "#f16728",
              color: "white",
            }}
          >
            Review and Publish
          </button>
        </div>
      </div>
    </>
  );
};

export default OfferType;
