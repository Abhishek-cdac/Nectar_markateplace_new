import React, { useState } from "react";
import dummyData from "./Dummydata";
import RadioButton from "../Components/Admin/Radio";

function LoginPage() {

  const [checkedValue, setIsChecked] = React.useState(1);
  console.log(checkedValue);
  // const handleToggle = () => {
  //   setValue(!value);
  //   console.log("togglevalue", value);
  // };

  return (
    <>
      <section id="loginbg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="loginleftsection">
                <div className="LogInText">
                  <center>
                    <h1 className="col-lg-8">Welcome to Nectar Marketplace</h1>
                  </center>
                  {/* <h1 className="col-lg-4">Nectar Marketplace</h1> */}
                  <p>
                    Nectar Infotel Solution Pvt. Ltd. is a leading International
                    IT organization offering end-to-end Telecommunication
                    OSS/BSS system integration as service. Software development
                    as Service, Mobile & Web application development. "Oracle
                    Database - Design, Implementation, Integration, Operations &
                    L1/L2 Support". "VMware - Design, Implementation,
                    Integration, Operations & L1/L2 Support."{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="loginrightsection">
                <div className="row mt-3">
                  <div className="col-lg-5 mt-3">
                    <img className="header_logo" src="assets/images/logo.png" />
                    <a
                      class="navbar-brand"
                      href="#"
                      style={{
                        fontWeight: "bold",
                        color: "grey",
                        fontSize: "large",
                        borderLeft: "2px solid grey",
                      }}
                    >
                      &nbsp;&nbsp;Marketplace
                    </a>
                  </div>
                  <div className="col-lg-7 mt-3 loginNew">
                    New to The Product ?
                    <span>
                      <a class="nav-link" href="/register">
                        Register Here
                      </a>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="signinform">
                    <h6>
                      <b style={{ color: "#474747" }}>Sign up</b>
                    </h6>
                    <p style={{color:"grey",fontFamily:"sans-serif",fontSize:"medium"}}>
                      To access{" "}
                      <span style={{ color: "#F16728" }}> Nectar </span>{" "}
                      Marketplace
                    </p>
                  </div>
                </div>
                {/* <div className="signinform1">
                  <div className="row">
                    <div className="col-lg-3">
                      <h6>Log In as</h6>
                    </div>
                    <div className="col-lg-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="partner"
                          onChange={handleToggle}
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Partner
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value={value}
                          onChange={handleToggle}
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Reseller
                        </label>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div class="col-lg-12 UserManRadio">
                  <p style={{ color: "#474747", marginLeft: "3em" }}>
                    <b style={{ marginRight: "3em" }}>Log In As</b>

                    {dummyData?.loginRadio.map((item) => {
                      return (
                        <RadioButton
                          type="radio"
                          key={item.id}
                          id={item.id}
                          name="radioGroup"
                          // style={{marginLeft:"3em"}}
                          className="UserRadio"
                          label={item.label}
                          checked={checkedValue === item.id}
                          onChange={() => setIsChecked(item.id)}
                        />
                      );
                    })}
                  </p>
                </div>

                <div className="row">
                  <div className="signinform1">
                    <div className="login mt-4">
                      <input placeholder="Enter Email ID" type="text" />

                      <input
                        className="mt-2"
                        placeholder="Enter Password"
                        type="password"
                      />
                      <div className="forgotpassword mt-2">
                        <p style={{ textAlign: "right"}}>
                          Forgot Password?
                          <span>
                            <a class="nav-link" href="/forgetpassword">
                              Reset here 
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 loginText">
                      Lorem Ipsum, sometimes referred to as 'lipsum', is the
                      placeholder text used in design when creating content. It
                      helps designers plan out where the content will sit.
                    </p>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="check2"
                        name="option2"
                        value="something"
                        style={{fontSize:"initial",marginTop:"0.4em"}}
                      />
                      <label class="form-check-label" for="check2" style={{fontSize:"medium",color:"#333333",fontFamily:"sans-serif"}}>
                        I agree to the{" "}
                        <span>
                          <a
                            class="nav-link"
                            href="/"
                            style={{
                              color: "#333333",
                              textDecoration: "underline",
                              fontSize:"medium",
                              // color:"grey",
                              fontFamily:"sans-serif",
                              padding:"2px",
                            }}
                          >
                          Terms of Service, Marketplace Terms
                          </a>
                        </span>{" "}
                        of Use and{" "}
                        <span>
                          <a
                            class="nav-link"
                            href="/"
                            style={{
                              color: "#333333",
                              textDecoration: "underline",
                              padding:"2px",
                            }}
                          >
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                    <div className="submitbtn">
                      <div className="row">
                        <button
                          type="button"
                          class="btn mt-4 mb-5"
                          style={{
                            backgroundColor: "#F16728",
                            color: "white",
                          }}
                        >
                          Log In
                        </button>
                      </div>
                    </div>
                    {checkedValue == 1 ? (
                      <div className="row mb-5">
                        <div className="col-lg-8">
                          <div className="icon">
                            <h6>Or Log In Using</h6>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <a href="#">
                            <i class="fa-brands fa-google fa-lg"></i>
                          </a>
                          &nbsp;&nbsp;&nbsp;
                          <a href="#">
                            <i class="fa-brands fa-linkedin fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    ) :" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
