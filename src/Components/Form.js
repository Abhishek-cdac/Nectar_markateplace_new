import React from "react";
import Contact from "../assets/Contact.png";

function Form() {
  return (
    <div class="midsec">
      <div className="container">
        <div className="row">
          <div class="col-md-6">
            <img className="img-fluid" src={Contact} alt="" />
          </div>
          <div class="midform p-5 col-md-6">
            <h3 style={{ color: "#08668F" }}>
              We Would Love To Hear From You!
            </h3>
            <div class="border-bottom border-secondary border-1">
              <label for="exampleInputEmail1">Full Name</label>
            </div>
            <div class="border-bottom border-secondary">
              <label for="exampleInputPassword1">Email ID</label>
            </div>
            <div class="border-bottom border-secondary">
              <label for="exampleInputPassword1">Password</label>
            </div>
            <div class="border-bottom border-secondary">
              <label for="exampleInputPassword1">Contact Number</label>
            </div>
            <div>
              <p class="midpara">
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
                I agree to the Terms of Service, Marketplace Terms of Use and
                Privacy Policy.
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
