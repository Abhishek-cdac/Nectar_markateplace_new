import React from "react";
import "./GetProduct.css";
import DummydataGetproduct from "../containers/DummydataGetproduct";
import Header2 from "./Header/Header2";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function GetProduct() {
  const navigate = useNavigate();
  return (
    <>
      <Header2 />
      <div className="container">
        <div className="row">
          <div className="col-md-8 ">
            <div className="row">
              <div className="col-md-6 p-4">
                <p>1 Payment for Product & Organization </p>
              </div>
              <div className="col-md-6 mt-3">
                {DummydataGetproduct &&
                  DummydataGetproduct.productandorganizationdata.map((data) => (
                    <p className="mt-2">{data.Organization}</p>
                  ))}
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 mb-5 CheckoutCardData">
                <p className="mx-3">2 Select Payment Method</p>
                <div className="paymentmethod_card">
                  <h6 className="p-3">Your saved Credit and Debit Cards</h6>
                  <div className="text-end">
                    <p>
                      Name on card <span className="mx-5">Expires on</span>{" "}
                    </p>
                  </div>
                  <div className="horizontal_line"></div>
                  <div className="pyment_method mt-2">
                    <div
                      class="form-check col-lg-12 mt-3"
                      style={{ display: "flex" }}
                    >
                      <input
                        class="form-check-input paymentRadio"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        style={{marginLeft:"-1%",fontSize:"medium",marginTop:"0.1em",}}
                      />
                      {/* <label class="form-check-label" for="flexRadioDefault1"> */}
                      <h6
                        className="text-body col-lg-3"
                        style={{ marginLeft: "1em" }}
                      >
                        ICICI Bank Debit Card
                      </h6>
                      <p
                        className="col-lg-3"
                        style={{ fontSize: "small", marginLeft: "-3em" }}
                      >
                        ending with 5676
                      </p>
                      <img
                        src="/assets/images/visa.png"
                        style={{ height: "35px", marginLeft: "-8em",marginTop:"-0.4em" }}
                      ></img>
                      <p
                        className="contents col-lg-2"
                        style={{ fontSize: "medium", marginLeft: "28%" }}
                      >
                        John Lorenson
                      </p>
                      <p className="col=lg-2" style={{ fontSize: "medium" }}>
                        08/12/2022
                      </p>

                      {/* </label> */}
                    </div>
                    <label
                      className=""
                      style={{ fontSize: "12px", marginLeft: "2.5em" }}
                    >
                      Enter CVV (? ) :
                      <span className="" style={{ marginLeft: "0.5em" }}>
                        <input
                          type="text"
                          style={{ border: "1px solid #F16728" }}
                        />
                      </span>
                    </label>

                    <div className="mx-4 my-1">
                      <i className="fa fa-exclamation-circle green-color"></i>
                      <span style={{ fontSize: "small" }}>
                        This card is recommended for you{" "}
                        <i style={{ color: " #2DC186 " }}>why</i>
                      </span>
                    </div>
                  </div>
                  <p className="mx-3 cardAnother">Another payment method</p>
                  <div className="horizontal_line mb-2"></div>
                  <div className="paymentOptions">
                    <div class="form-check mx-3  text-dark">
                      <input
                        class="form-check-input paymentRadio"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Add debit / Credit / ATM Card
                      </label>
                    </div>
                    <div className="mx-5">
                      <img
                        src="/assets/images/visa.png"
                        style={{ height: "40px" }}
                      ></img>
                      <span>
                        <img
                          style={{ height: "40px" }}
                          src="/assets/images/Master-Card-Blue-icon.png"
                        ></img>
                      </span>
                      <span>
                        {" "}
                        <img
                          style={{ height: "40px" }}
                          src="/assets/images/2384495.png"
                        ></img>{" "}
                      </span>
                      <span>
                        <img
                          style={{ height: "30px" }}
                          src="/assets/images/Maestro.png"
                        ></img>
                      </span>
                      <span>
                        <img
                          style={{ height: "30px" }}
                          src="/assets/images/Rupay.png"
                        ></img>
                      </span>
                    </div>
                    <div class="form-check mx-3  text-dark">
                      <input
                        class="form-check-input paymentRadio"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label " for="flexRadioDefault2">
                        Net Banking
                      </label>
                    </div>
                    <div class="dropdown CartDropDown">
                      <button
                        className="btn btn-success dropdown-toggle text-dark"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Choose an option
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="form-check p-3 mx-3 text-dark">
                      <input
                        class="form-check-input paymentRadio"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Other UPI Apps
                      </label>
                    </div>
                    <div class="form-check p-3 mx-3 text-dark">
                      <input
                        class="form-check-input paymentRadio"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        EMI
                      </label>
                    </div>
                    <div class="form-check p-3 mx-3 text-dark">
                      <input
                        class="form-check-input paymentRadio"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Crypto Payment
                      </label>
                      <span>
                        {" "}
                        <img
                          style={{ height: "30px" }}
                          src="/assets/images/NFT-png.png"
                        ></img>
                      </span>
                      {DummydataGetproduct &&
                        DummydataGetproduct.productandorganizationdata.map(
                          (data) => (
                            <p
                              className="text-end"
                              onClick={() => navigate(data.url)}
                              style={{ color: "#1291C9" }}
                            >
                              {data.Balance}
                           
                            </p>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            
            {DummydataGetproduct &&
              DummydataGetproduct.Getproduct.map((data) => (
                <div className="orderdetails_card">
                  <h6 className="my-3 " style={{marginLeft:"2em",paddingTop:"1em",opacity:"0.8em"}}><b>Your Order Details</b></h6><hr/>
                  {/* <div className="horizontal_line"></div> */}
                  <img
                    className="image-fluid m-4"
                    style={{ height: "60px" }}
                    src={data.image}
                    alt="imag"
                  ></img>
                  <span>{data.user}</span>
                  <p className="text-center mx-2" style={{ fontSize: "13px" }}>
                    Choose the payment method to continue checking out. you will
                    still have a chance to review your order before it's final.
                  </p>
                  <div className="horizontal_line"></div>
                  <div className="mx-2 ">
                    <p>Order Summary</p>
                    <p className="m-1 ms-2" style={{ fontSize: "small" }}>
                      Product:{" "}
                      <span className="px-5" style={{ marginLeft:"7em"}}>
                        {data.product}
                      </span>
                    </p>
                    <p style={{ fontSize: "small",marginLeft:"0.6em" }}>
                      {" "}
                      Product Processing:{" "}
                      <span className="px-5" style={{ marginLeft: "40px" }}>
                        {data.productprocessing}
                      </span>
                    </p>
                  </div>
                  <div className="horizontal_line"></div>
                  <h6 className="text-center my-3" style={{ color: " #EB5C2F" }}>
                    {data.productcost}
                  </h6>
                  <div className="horizontal_line"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GetProduct;
