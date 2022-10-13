import React from "react";
import "./Registrationdetails.css";

function PartnerRegistrationsDetails() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <nav class="navbar bg-white">
            <div class="container">
              <a class="navbar-brand" href="#">
                <i
                  class="fa fa-long-arrow-left"
                  // onClick={() => navigate("/admin/paymentmanagament")}
                  aria-hidden="true"
                ></i>
                <img
                  src="/assets/images/user3.png"
                  alt="Bootstrap"
                  //   width="35"
                  //   height="24"
                />
                <span className="text-muted">Brain Lara</span>
              </a>
            </div>
          </nav>
        </div>

        <div className="col-md-12 mt-4">
          <div className="backgraound_white p-3">
            <h5 className>Registrations Details</h5>
            <div className="row">
              <div className="col-md-6 mt-4">
                <form>
                  <span> Full Name:</span>
                  <input
                    style={{ height: "38px" }}
                    type="text"
                    name="firstname"
                    className="inputfield "
                    placeholder="Brain Lara"
                  />{" "}
                </form>
                <br></br>
                <form>
                  <span>Contact Number:</span>
                  <input
                    style={{ height: "38px" }}
                    type="text"
                    name="firstname"
                    className=""
                    placeholder="+91- XXXXXXXX31"
                  />
                </form>
                <br></br>
                <form>
                  <span>Organization's Name:</span>

                  <input
                    style={{ height: "38px" }}
                    type="text"
                    name="firstname"
                    className=""
                    placeholder="abc. Solutions Pvt. Ltd."
                  />
                </form>
                <br></br>
                <form>
                  <span> Date of Registration:</span>

                  <input
                    style={{ height: "38px" }}
                    type="text"
                    name="firstname"
                    className="date of ragistration"
                    placeholder="2/09/2021, 06:00 PM IST"
                  />
                </form>
                <br></br>
                <form className="assign-lead-to">
                  <span> Assign Lead to:</span>

                  <select
                    class="form-select assign-lead-to"
                    aria-label="Default select example"
                  >
                    <option selected>Tele-calling Team</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </form>
                <br></br>
              </div>

              <div className="col-md-6 mt-4">
                <form>
                  <span> Email ID:</span>

                  <input
                    style={{ height: "38px" }}
                    type="text"
                    name="firstname"
                    className=""
                    placeholder="brainl@gmail.com"
                  />
                </form>
                <br></br>
                <form>
                  <span>Alternate Number:</span>
                  <input
                    style={{ height: "38px" }}
                    type="text"
                    name="firstname"
                    className=""
                    placeholder="+91- XXXXXXXX31"
                  />
                </form>
                <br></br>
                <form>
                  <span>Country:</span>

                  <input
                    style={{ height: "38px" }}
                    type="text"
                    name="firstname"
                    className="country"
                    placeholder="Atlanta"
                  />
                </form>
                <br></br>
                <form className="assign-lead-to">
                  <span>Select Team Member:</span>

                  <select
                    class="form-select assign-lead-to"
                    aria-label="Default select example"
                  >
                    <option selected>John Rado</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </form>
                <br></br>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <p>
                    Note: You can pass the contact details to admin or executive
                    for follow up,{" "}
                    <u style={{ color: "#08668F" }}>Click here </u>
                    generate follow up
                  </p>
                </div>
              </div>
              <div className="registrations-details-button mt-5">
                <div className="text-center">
                  <button class="btn btn-submit" type="submit">
                    Submit
                  </button>
                  <button type="button" class="btn btn-cancel m-3">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerRegistrationsDetails;
