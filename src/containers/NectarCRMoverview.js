import React from "react";
import DummyData from "./DummyNectarCRM";
import Contact from "../Assets/Contact.svg";

function NectarCRMoverview() {
  console.log("dummydata", DummyData);
  return (
    <div className="container  shadow   mb-5 bg-body rounded ">
      {DummyData &&
        DummyData.TabsData.map((data) => (
          <div>
            <div className="row" style={{ textAlign: "center" }}>
              <h2>{data.title}</h2>
            </div>
            <div className="row">
              <p>{data.description}</p>
            </div>
            <div className="row">
              <p class="border-bottom pt-5">{data.head1}</p>
            </div>
            <div className="row">
              <p class="border-bottom">{data.head2}</p>
            </div>
            <div className="row">
              <p class="border-bottom">{data.head3}</p>
            </div>

            <div className="row">
              <p class="border-bottom">{data.head4}</p>
            </div>
            <div className="row">
              <p> {data.head5}</p>
            </div>
            <div class="midsec pt-5">
              <div class="container ">
                <div class="midimg ">
                  <img src={Contact} alt="" height="500px" />
                </div>
                <div class="midform p-5"  >
                  <h3 style={{color:"#08668F"}}>We Would Love To Hear From You!</h3>
                  <div class="border-bottom" style={{fontSize:14}}>
                    <label for="exampleInputEmail1">Full Name</label>
                  </div>
                  <div class="border-bottom" style={{fontSize:14}}>
                    <label for="exampleInputPassword1">Email ID</label>
                  </div>
                  <div class="border-bottom" style={{fontSize:14}}>
                    <label for="exampleInputPassword1">Password</label>
                  </div>
                  <div class="border-bottom" style={{fontSize:14}}>
                    <label for="exampleInputPassword1">Contact Number</label>
                  </div>
                  <div>
                    <p class="midpara"  >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis expedita fugit quae quo minima aliquam. Veniam
                      doloremque nesciunt distinctio asperiores pariatur.
                    </p>
                  </div>

                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      I agree to the Terms of Service, Marketplace Terms of Use
                      and Privacy Policy.
                    </label>
                  </div>
                  <br />
                  <br />
                  <button type="submit" class="btn  float-right midbutton">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default NectarCRMoverview;
