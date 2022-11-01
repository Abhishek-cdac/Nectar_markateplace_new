import React, { useState } from "react";
import "./admin.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    // e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <>
      <div id="AdLogin">
        <center>
          <div className="container AdLoginContainer">
            <div className=" col-lg-6 adminLoginCont">
              <div className="row adminLogTitle">
                <div className="col-lg-6 mt-4">
                  <img
                    className="header_logo"
                    src="/assets/images/60-X-60.png"
                  />
                  <a
                    class="navbar-brand_adLogin"
                    href="/admin/login"
                    style={{
                      color: "black",
                      fontSize: "large",
                      // borderLeft: "1px solid black",
                      opacity: "0.8",
                    }}
                  >
                    Marketplace
                  </a>
                </div>
              </div>

              <div className="row AdLogmain">
                <div className="col-lg-7 mt-4 loginTitle">
                  <h5>Login as Nectar Admin</h5>
                </div>
                <div className="AdLoginForm">
                  <div className="login">
                    <input
                      className=" col-lg-12 mt-4"
                      placeholder="Enter Email ID"
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                    <input
                      className=" col-lg-12 mt-4"
                      placeholder="Enter Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                    <div className="Adforgotpassword mt-2">
                      <a class="nav-link" href="forgetPassword" style={{color:"black"}}>
                        Forgot Your Password ? Reset here.
                      </a>
                    </div>
                  </div>

                  <div className="submitbtn">
                    <div className="row">
                      <button
                        type="button"
                        className="btn mt-4 mb-5 AdLoginbutton"
                        onClick={handleSubmit}
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Login;
