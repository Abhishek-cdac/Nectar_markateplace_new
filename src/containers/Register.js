import React, { useState } from "react";
import dummyData from "./Dummydata";
import RadioButton from "../Components/Admin/Radio";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    full_name: "",
    pass: "",
    email: "",
    repass: "",
    no: "",
    mobileno: "",
    organization: "",
    country: "",
    state: "",
  });
  const {
    full_name,
    pass,
    email,
    repass,
    no,
    mobileno,
    organization,
    country,

    state,
    partner,
    Reseller,
  } = data;

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const onSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    if (pass !== repass) {
      console.log("Passwords do not match");
    } else {
      // console.log(formData);
      const newUser = {
        full_name,
        email,
        pass,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post("/api/users", body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <>
      <section id="loginbg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="registrationleftsection"
                style={{ marginLeft: "10px" }}
              >
                <h1>Welcome to Nectar Marketplace</h1>
                <p>
                  Nectar Infotel Solution Pvt. Ltd. is a leading International
                  IT organization offering end-to-end Telecommunication OSS/BSS
                  system integration as service. Software development as
                  Service, Mobile & Web application development. "Oracle
                  Database - Design, Implementation, Integration, Operations &
                  L1/L2 Support". "VMware - Design, Implementation, Integration,
                  Operations & L1/L2 Support."{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="registrationrightsection">
                <div className="row mt-3">
                  <div className="col-lg-5 mt-3">
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
                  <div className="col-lg-7 mt-3">
                    Already Have an Account?
                    <a class="nav-link" href="/login">
                      Sign In
                    </a>
                  </div>
                </div>
                <div className="signinform1">
                  <div className="row mt-5">
                    <div className="col-lg-3">
                      <h6>Register as</h6>
                    </div>
                    {/* <div className="col-lg-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="partner"
                          id="flexRadioDefault1"
                          value={partner}
                          onChange={(e) => handleChange(e)}
                          required
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
                          name="Reseller"
                          id="flexRadioDefault1"
                          value={Reseller}
                          onChange={handleChange}
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Reseller
                        </label>
                      </div>
                    </div> */}

                    <div class="col-lg-12 UserManRadio">
                      <p style={{ color: "#474747", marginLeft: "3em" }}>
                        <b style={{ marginRight: "3em" }}>Log In As</b>

                        {dummyData?.loginRadio.map((item) => {
                          return (
                            <RadioButton
                              type="radio"
                              value={item.id}
                              id={item.id}
                              name="radioVal"
                              className="UserRadio"
                              label={item.label}
                              onChange={(e) => handleChange(e)}
                            />
                          );
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="registrationform1">
                      <div className="login mt-4">
                        <input
                          placeholder="Enter Full Name"
                          type="text"
                          value={full_name}
                          name="full_name"
                          onChange={handleChange}
                        />
                        <input
                          className="mt-3"
                          placeholder="Professional Email"
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />
                        <input
                          style={{ width: "90%" }}
                          className="mt-3"
                          placeholder="Password"
                          type="password"
                          name="pass"
                          value={pass}
                          onChange={handleChange}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <input
                          style={{ width: "90%" }}
                          className="mt-3"
                          placeholder="Re-Enter Your Password"
                          type="password"
                          name="repass"
                          value={repass}
                          onChange={handleChange}
                        />
                        <br />
                        <input
                          style={{ width: "10%" }}
                          className="mt-3"
                          placeholder="+91"
                          type="number"
                          name="no"
                          value={no}
                          onChange={handleChange}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <input
                          style={{ width: "77%" }}
                          className="mt-3"
                          placeholder="Enter Your Mobile Number"
                          type="number"
                          name="mobileno"
                          value={mobileno}
                          onChange={handleChange}
                        />
                        <input
                          style={{ width: "39%" }}
                          className="mt-3"
                          placeholder="Enter Country"
                          type="text"
                          name="country"
                          value={country}
                          onChange={handleChange}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <input
                          style={{ width: "48%" }}
                          className="mt-3"
                          placeholder="Enter State"
                          type="text"
                          name="state"
                          value={state}
                          onChange={handleChange}
                        />
                        <input
                          className="mt-3"
                          placeholder="Organization Name"
                          type="text"
                          name="organization"
                          value={organization}
                          onChange={handleChange}
                        />
                        <p style={{ fontSize: "13px" }}>
                          Lorem Ipsum, sometimes referred to as 'lipsum', is the
                          placeholder text used in design when creating content.
                          It helps designers plan out where the content will
                          sit.
                        </p>
                      </div>
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="check2"
                          name="leaves"
                          checked={state.isChecked}
                          onChange={handleChange}
                        />
                        <label
                          class="form-check-label"
                          for="check2"
                          style={{ marginTop: "-6px" }}
                        >
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
                            onClick={onSubmit}
                            style={{
                              backgroundColor: "#F16728",
                              color: "white",
                              width: "50%",
                              marginLeft: "19%",
                              border: "none",
                              borderRadius: "8px",
                              height: "37px",
                            }}
                          >
                            Register
                          </button>
                        </div>
                      </div>
                      {!data && (
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
                      )}
                    </div>
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

export default Register;
