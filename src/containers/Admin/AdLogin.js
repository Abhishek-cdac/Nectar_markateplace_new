import React from "react";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="loginrightsection">
              <div className="row mt-3">
                <div className="col-lg-6 mt-3">
                  <img className="header_logo" src="assets/images/logo.png" />
                  <a
                    class="navbar-brand"
                    href="#"
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "large",
                      borderLeft: "2px solid black",
                    }}
                  >
                    &nbsp;&nbsp;Marketplace
                  </a>
                </div>
                <div className="col-lg-6 mt-3">
                  New to The Product?
                  <a class="nav-link" href="/register">
                    Register Here
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="signinform">
                  <h6>Sign In</h6>
                  <p>
                    to access <span style={{ color: "#F16728" }}> Nectar </span>{" "}
                    Marketplace
                  </p>
                </div>
              </div>
              <div className="signinform1">
                <div className="row">
                  <div className="col-lg-3">
                    <h6>Log In as Admin</h6>
                  </div>
                
                </div>
              </div>
              <div className="row">
                <div className="signinform1">
                  <div className="login mt-4">
                    <input placeholder="Enter Email ID" type="text" />
                    <br />
                    <input
                      className="mt-3"
                      placeholder="Enter Password"
                      type="password"
                    />
                    <div className="forgotpassword mt-2">
                      <p style={{ textAlign: "right" }}>
                        Forgot Password?
                        <span>
                          <a class="nav-link" href="/forgetpassword">
                            Reset here
                          </a>
                        </span>
                      </p>
                    </div>
                    <p className="mt-5">
                      Lorem Ipsum, sometimes referred to as 'lipsum', is the
                      placeholder text used in design when creating content. It
                      helps designers plan out where the content will sit.
                    </p>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="check2"
                      name="option2"
                      value="something"
                    />
                    <label class="form-check-label" for="check2">
                      I agree to the{" "}
                      <span>
                        <a
                          class="nav-link"
                          href="/"
                          style={{
                            color: "black",
                            textDecoration: "underline",
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
                            color: "black",
                            textDecoration: "underline",
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
                  {/* {!value && (
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
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
