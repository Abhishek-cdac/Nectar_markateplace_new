import React, { useState } from "react";

function Settings() {
  const [passwordType, setPasswordType] = useState("Old password");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordType1, setPasswordType1] = useState("Old password");
  const [passwordInput1, setPasswordInput1] = useState("");
  const [passwordType2, setPasswordType2] = useState("Old password");
  const [passwordInput2, setPasswordInput2] = useState("");

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const handlePasswordChange1 = (evnt) => {
    setPasswordInput1(evnt.target.value);
  };
  const togglePassword1 = () => {
    if (passwordType1 === "password") {
      setPasswordType1("text");
      return;
    }
    setPasswordType1("password");
  };

  const handlePasswordChange2 = (evnt) => {
    setPasswordInput2(evnt.target.value);
  };
  const togglePassword2 = () => {
    if (passwordType2 === "password") {
      setPasswordType2("text");
      return;
    }
    setPasswordType2("password");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <label for="oldpassword" className="mt-3">Old Password <span style={{color:"red"}}>*</span></label>
            <div className="input-group">
              <input
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
                class="form-control"
                placeholder="Password"
              />
              <div className="input-group-btn">
                <button
                  className="btn btn-outline-primary"
                  onClick={togglePassword}
                >
                  {passwordType === "password" ? (
                    <i class="fa-regular fa-eye"></i>
                  ) : (
                    <i class="fa-regular fa-eye-slash"></i>
                  )}
                </button>
              </div>
            </div>
            <label for="oldpassword" className="mt-3">New Password <span style={{color:"red"}}>*</span></label>
            <div className="input-group">
              <input
                type={passwordType1}
                onChange={handlePasswordChange1}
                value={passwordInput1}
                name="password"
                class="form-control"
                placeholder="Password"
              />
              <div className="input-group-btn">
                <button
                  className="btn btn-outline-primary"
                  onClick={togglePassword1}
                >
                  {passwordType === "password" ? (
                    <i class="fa-regular fa-eye"></i>
                  ) : (
                    <i class="fa-regular fa-eye-slash"></i>
                  )}
                </button>
              </div>
            </div>
            <label for="oldpassword" className="mt-3">Confirm New Password <span style={{color:"red"}}>*</span></label>
            <div className="input-group">
              <input
                type={passwordType2}
                onChange={handlePasswordChange2}
                value={passwordInput2}
                name="password"
                class="form-control"
                placeholder="Password"
              />
              <div className="input-group-btn">
                <button
                  className="btn btn-outline-primary"
                  onClick={togglePassword2}
                >
                  {passwordType === "password" ? (
                    <i class="fa-regular fa-eye"></i>
                  ) : (
                    <i class="fa-regular fa-eye-slash"></i>
                  )}
                </button>
              </div>
            </div>
            <div className="text-center">
            <button type="submit" class="btn btn-primary mt-3">Update Password</button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Settings;
