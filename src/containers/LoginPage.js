import React, { useState } from "react";
import dummyData from "./Dummydata";
import RadioButton from "../Components/Admin/Radio";
import { showAlert } from "./ShowAlter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;

  const haandleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setData({ ...data, [e.target.name]: value });
  };

  const navigate = useNavigate();
  const login = () => {
    console.log(data);

    axios
      .post("http://hrmsuat.nectarinfotel.com/hrms/api/usersapi.php", {
        username: username,
        password: password,
      })
      .then((result) => {
        console.log(result.data.users[0].loginstatus);
        if (result.data.users[0].loginstatus == "successful") {
          showAlert("Logged in.", "success");
          setTimeout(() => {
            navigate("/nectarcrmtab");
          }, "3000");
        } else {
          showAlert("You have enter invalid email or password .", "error");
        }
      })
      .catch((error) => {
        console.log(error);
        showAlert("Please enter valid credentials.", "error");
      });
  };

  return (
    <>
      <section id="loginbg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="loginleftsection">
                <div className="LogInText">
                  <center>
                    <h1 className="col-lg-8">
                      Welcome to ,<br></br> Nectar Marketplace
                    </h1>
                  </center>
                  <br />
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
            <div className="col-lg-6 ">
              <div className="loginrightsection">
                <div className="row mt-3">
                  <div className="col-lg-5 mt-3">
                    <img className="header_logo" src="assets/images/logo.png" />
                    <a
                      class="navbar-brand"
                      href="#"
                      style={{
                        fontWeight: "500",
                        color: "#474747",
                        fontSize: "small",
                        borderLeft: "2px solid grey",
                        height:"20px"
                      }}
                    >
                      &nbsp;&nbsp;Marketplace
                    </a>
                  </div>
                  <div
                    className="col-lg-7 mt-3 mx-0 loginNew"
                    style={{ fontSize: "10px",color:"#333333" }}
                  >
                    New to The Product ?
                    <span>
                      <a class="nav-link" onClick={()=>navigate("/register")}>
                        Register Here
                      </a>
                    </span>
                  </div>
                </div>
                <div className="row" style={{marginTop:"30px"}}>
                  <div className="signinform">
                    <h6>
                      <b style={{ color: "#474747",  fontSize:"14px"}} className="mx-5">
                        Sign in
                      </b>
                    </h6>
                    <p
                      className="mx-5"
                      style={{
                        color: "#474747",
                        fontFamily: "sans-serif",
                        fontSize: "10px",
                      }}
                    >
                      To access{" "}
                      <span style={{ color: "#F16728" }}> Nectar </span>{" "}
                      Marketplace
                    </p>
                  </div>
                </div>

                <div class="col-lg-12 col-sm-12 UserManRadio">
                  <p style={{ color: "#474747", marginLeft: "3em" }}>
                    <b style={{ marginRight: "1em",fontSize:"12px" }}>Log In As</b>

                    {dummyData?.loginRadio.map((item) => {
                      return (
                        <RadioButton
                          type="radio"
                          value={item.id}
                          id={item.id}
                          name="radioVal"
                          className="UserRadio"
                          label={item.label}
                          onChange={(e) => haandleChange(e)}
                        />
                      );
                    })}
                  </p>
                </div>

                <div className="row">
                  <div className="signinform1">
                    <div className="login  mt-3" style={{ fontSize: "small" }}>
                      <input
                        placeholder="Enter Email ID"
                        type="text"
                        name="username"
                        value={username}
                        onChange={haandleChange}
                      />

                      <input
                        className="mt-3"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={haandleChange}
                      />
                      <div className="forgotpassword mt-2">
                        <p style={{ textAlign: "right", fontSize: "11px",color:"#777777" }}>
                          Forgot Password?
                          <span>
                            <a class="nav-link" onClick={()=>navigate("/forgetpassword")}>
                              Reset here
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="loginText mt-3" style={{ fontSize: "10px",color:"#777777" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="check2"
                        name="leaves"
                        checked={data.isChecked}
                        onChange={haandleChange}
                        style={{ fontSize: "initial" }}
                      />
                      <label
                        class="form-check-label"
                        for="check2"
                        style={{ fontSize: "9.6px" }}
                       
                      >
                        I agree to the{" "}
                        <span>
                          <a
                            class="nav-link"
                            href="/"
                            style={{
                              color: "#333333",
                              textDecoration: "underline",
                          
                               color:"#333333",
                              fontFamily: "sans-serif",
                              padding: "2px",
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
                              padding: "2px",
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
                          onClick={login}
                          type="button"
                          className="login-b"
                          // style={{
                          //   backgroundColor: "#F16728",
                          //   color: "white",
                          //   width: "250px",
                          //   height: "80px",

                          //   border: "none",
                          //   height: "37px",
                          //   borderRadius: "5px",
                          // }}
                        >
                          Log In
                        </button>
                        <ToastContainer />
                      </div>
                    </div>
                    {data.radioVal == 2 ? (
                      <div className="row mb-5">
                        <div className="col-lg-6 d-flex justify-content-end mt-3">
                          <div className="icon">
                            <p style={{fontSize:"14px",color:"black"}}>Or Log In Using</p>
                          </div>
                        </div>
                        <div className="col-lg-6 mt-2">
                          <a href="#">
                          <i class="fab fa-google fa-2x "></i>
                          </a>
                          &nbsp;&nbsp;&nbsp;
                          <a href="#">
                            <p style={{fontSize:"15px"}}>   <i class='fa fa-linkedin-square yellow-color fa-2x'></i></p>
                      
                          </a>
                        </div>
                      </div>
                    ) : (
                      " "
                    )}
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
