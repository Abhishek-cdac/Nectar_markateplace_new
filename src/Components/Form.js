import React from "react";
import Contact from "../assets/Contact.png";

function Form() {
  return (
    <div class="midsec">
      <div className="container" >
        <div className="row" >
          <div class="col-md-6">
            <img className="img-fluid" src={Contact} alt="" />
          </div>
          <div class="midform p-5 col-md-6" >
            <h3 style={{ color: "#08668F" }}>
              We Would Love To Hear From You!
            </h3>
            <div className="tabsform pt-5" style={{ fontSize: "medium" }}>
              <input placeholder="Full Name" type="text" name="username" />
              <input
                className="mt-4"
                placeholder="Email ID"
                type="text"
                name="email"
              />

              <input
                className="mt-4"
                placeholder="Password"
                type="password"
                name="password"
              />

              <input
                className="mt-4"
                placeholder="Contact Number"
                type="text"
                name="contact"
              />
            </div>

            <div>
              <p class="midpara mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                expedita fugit quae quo minima aliquam. Veniam doloremque
                nesciunt distinctio asperiores pariatur.
              </p>
            </div>

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                I agree to the <u>Terms of Service</u>, <u>
                Marketplace Terms</u> of Use and 
                  <u> Privacy Policy</u>.
              </label>
            </div>
            <div className="gap-2 pt-4 d-md-flex justify-content-md-center">
              <button type="submit" class="btn   float-center midbutton">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
