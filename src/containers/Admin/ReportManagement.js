import React from "react";

const ReportManagement = () => {
  return (
    <>
      <div className="container">
        <div className="row"  style={{color:"#838383"}}>
          <div className="col col-lg-6">
            <h4 className="mt-4 mb-4">Report Management</h4>
          </div>
          <div>
            <hr />
          </div>
          <div className="col-lg-6 ">
            <div className="row m-4">
              <div className="col-lg-3">
                <label htmlFor="offer">Type: </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <select
                    id="disabledSelect"
                    class="form-select mx-2"
                    style={{ width: "100%" ,color:"#838383"}}
                  
                  >
                    <option>Annual</option>
                    <option>Quarterly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row m-4">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Start Date:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <input
                    type="date"
                    value="2018-07-22"
                    placeholder="31/12/2021 | 12:00 AM"
                    style={{
                      color:"#838383"
,                      margin: "0px 8px",
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
            <div className="row m-4">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Region:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <select
                    id="disabledSelect"
                    class="form-select mx-2"
                    style={{ width: "100%" ,color:"#838383"}}
                  >
                    <option>Country</option>
                    <option>India</option>
                    {/* <option>Nectar GPS Tracker</option>
                    <option>nDatu - Task Manager</option>
                    <option>Nerro Trac-Bug Tracker</option>
                    <option>NT3-ITSM Tool</option> */}
                  </select>
                </div>
              </div>
            </div>
            <div className="row m-4">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Product:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-3">
                  <select
                    id="disabledSelect"
                    class="form-select mx-2"
                    style={{ width: "100%",color:"#838383" }}
                  >
                    <option>Nectar HRMS</option>

                    <option>Nectar GPS Tracker</option>
                    <option>nDatu - Task Manager</option>
                    <option>Nerro Trac-Bug Tracker</option>
                    <option>NT3-ITSM Tool</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row m-4">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-2">
                  Report Name:{" "}
                </label>
              </div>
              <div className="col-lg-9">
                <div class="mb-1">
                  <select
                    id="disabledSelect"
                    class="form-select mx-2"
                    style={{ width: "100%" ,color:"#838383"}}
                  >
                    <option>Partner Report</option>
                    <option>Registered User Report</option>
                    <option>Resseler Report</option>
                    <option>Sell Report</option>
                  </select>
                  <p style={{ fontSize: "12px" }}>
                    Or Type slowly for your result
                  </p>
                </div>
              </div>
            </div>

            <div className="row m-4">
              <div className="col-lg-3">
                <label htmlFor="offer" className="mt-1">
                  End Date:{" "}
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
                      color:"#838383",
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
          className="gap-2   col-lg-12 col-sm-6 col-xs-3 d-md-flex justify-content-md-center"
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
            View Report
          </button>
        </div>
      </div>
    </>
  );
};

export default ReportManagement;
