import React, { useState } from "react";
import dummyData from "../containers/Dummydata";
import Header2 from "./Header/Header2";
import ShippingAnotherAddress from "./ShippingAnotherAddress";

function ShippingAddress() {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue(!value);
    console.log("togglevalue", value);
  };
  return (
    <>
      <Header2 />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-8">
            <h2 className="mt-5">Billing Address</h2>
            <div className="row mt-4">
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  First Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="fname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  Last Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="lname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="add mt-3">
              <label for="name" class="form-label">
                Address Line1 <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="fname"
                class="form-control"
                aria-describedby="passwordHelpBlock"
                placeholder="Street name and House number"
              />
            </div>
            <div className="add1 mt-3">
              <label for="name" class="form-label">
                Address Line2(Optional)
              </label>
              <input
                type="text"
                id="fname"
                class="form-control"
                aria-describedby="passwordHelpBlock"
              />
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  City <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="fname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  Zip Code <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  id="lname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  Phone <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  id="fname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  Email Address <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  id="lname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
            </div>
            <div class="form-check1 mt-3 mx-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                class="form-check-label"
                for="flexCheckDefault"
                style={{ fontSize: "15px", color: "gray" }}
              >
                SHIP TO THE SAME ADDRESS?
              </label>
            </div>
            <div class="form-check1 mt-3 mx-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={handleToggle}
              />
              <label
                class="form-check-label"
                for="flexCheckDefault"
                style={{ fontSize: "15px", color: "gray" }}
              >
                SHIP TO A DIFFERENT ADDRESS?
              </label>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            {dummyData &&
              dummyData?.Getproduct?.map((data) => (
                <div
                  className="orderdetails_card"
                  style={{ border: "1px solid gray", borderRadius: "10px" }}
                >
                  <div className="horizontal_line"></div>
                  <img
                    className="image-fluid m-4"
                    style={{ height: "60px" }}
                    src={data?.image}
                    alt="imag"
                  />
                  <span>{data.user}</span>
                  <p className="text-center mx-2" style={{ fontSize: "13px" }}>
                    Choose the payment method to continue checking out. you will
                    still have a chance to review your order before it's final.
                  </p>
                  <div className="horizontal_line"></div>
                  <div className="mx-2 ">
                    <p>Order Summary</p>
                    <p className="m-1 ms-2" style={{ fontSize: "12px" }}>
                      Product:{" "}
                      <span className="px-5" style={{ marginLeft: "100px" }}>
                        {data?.product}
                      </span>
                    </p>
                    <p style={{ fontSize: "12px" }}>
                      {" "}
                      Product Processing:{" "}
                      <span className="px-5" style={{ marginLeft: "40px" }}>
                        {data?.productprocessing}
                      </span>
                    </p>
                  </div>
                  <div
                    className="horizontal_line"
                    style={{ borderTop: "1px solid gray" }}
                  ></div>
                  <h6
                    className="text-center mt-2"
                    style={{ color: " #EB5C2F" }}
                  >
                    {data?.productcost}
                  </h6>
                  <div className="text-center">
                    <button
                      type="button"
                      class="btn btn-sm"
                      style={{
                        backgroundColor: "#F16728",
                        border: "none",
                        padding: "2%",
                        margin: "2%",
                        color: "white",
                        width:"50%"
                      }}
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-12">{value && <ShippingAnotherAddress />}</div>
          <div className="col-8">
            <hr style={{ height: "1px", background: "black" }} />
            <div class="mb-3 mt-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Order Notes(Optional)
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Note about your order"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingAddress;
