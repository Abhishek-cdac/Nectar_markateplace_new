import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function landingpage() {
  return (
    <>
      <section id="loginbg">
        <Container>
          <Row>
            <Col lg={6} className="loginleftsection">
              <h1>Welcome to Nectar Marketplace</h1>
              <p>
                Nectar Infotel Solution Pvt. Ltd. is a leading International IT
                organization offering end-to-end Telecommunication OSS/BSS
                system integration as service. Software development as Service,
                Mobile & Web application development. "Oracle Database - Design,
                Implementation, Integration, Operations & L1/L2 Support".
                "VMware - Design, Implementation, Integration, Operations &
                L1/L2 Support."{" "}
              </p>
            </Col>
            <Col lg={6} className="loginrightsection">
              <Row className="mt-3">
                <Col lg={6}>
                  <img
                    className="header_logo"
                    src="assets/images/Multilogo.jpg"
                  />
                  <a
                    class="navbar-brand"
                    href="#"
                    style={{
                      fontWeight: "bolder",
                      color: "black",
                      fontSize: "large",
                      borderLeft: "2px solid black",
                    }}
                  >
                    &nbsp;&nbsp;MarketPlace
                  </a>
                </Col>
                <Col lg={6} className="mt-2">
                  New to The Product?
                  <a class="nav-link" href="/">
                    Register Here
                  </a>
                </Col>
              </Row>
              <Row className="signinform">
                <h6>Sign In</h6>
                <p>
                  to access <span style={{ color: "#F16728" }}> Nectar </span>{" "}
                  Marketplace
                </p>
              </Row>
              <Row className="signinform1">
                <Col lg={3}>
                  <h6>Log In as</h6>
                </Col>
                <Col lg={2}>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Partner
                    </label>
                  </div>
                </Col>
                <Col lg={2}>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Reseller
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="signinform1">
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
                        <a class="nav-link" href="/">
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
                    <a class="nav-link" href="/">
                      Terms of Service, Marketplace Terms
                    </a>
                  </span>{" "}
                  of Use and{" "}
                  <span>
                    <a class="nav-link" href="/">
                      Privacy Policy
                    </a>
                  </span>
                  </label>
                </div>
                <Row>
                <button type="button" class="btn mt-4 mb-5" style={{backgroundColor:"#F16728", color:"white"}}>Log In</button>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default landingpage;
