import React from "react";
import Card2 from "./Header/card2";
import Footer from "./Footer";

function Cart() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5">
            <h3>Your Cart</h3>
            <p style={{ color: "#1291C9" }}>Deselect all items</p>
            <p style={{ textAlign: "right", fontWeight: "bold" }}>Price</p>
            <hr />
            <p style={{ textAlign: "right", fontWeight: "bold" }}>$3432.80</p>
            <div class="form-check">
              <input
                class="form-check-input mt-2"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                <img
                  style={{ height: "44px" }}
                  src="data:image/png;base64,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"
                  alt=""
                />
                Nectar CRM
              </label>
              <p style={{ color: "#019A01", marginLeft: "12%" }}>Available</p>
              <div className="row">
                <div className="col-md-6">
                  <div class="dropdown">
                    <button class="dropbtn">
                      Users-5<i class="fa-solid fa-angle-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <a href="#">Users-1</a>
                      <a href="#">Users-2</a>
                      <a href="#">Users-3</a>
                      <a href="#">Users-4</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="operations">
                    <p>
                      <span>Delete |</span>
                      <span> Save for later |</span> See More Products{" "}
                      <span></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h5
              style={{
                textAlign: "right",
                marginBottom: "3%",
                fontWeight: "bold",
              }}
            >
              Product Cost(5 Users): $3432.80
            </h5>
          </div>
          <div className="col-md-4">
            <div className="card1">
              <div className="card">
                <h5>Product Cost (5 Users): $3432.80</h5>
                <button>Get Product</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="info">
            <h3>
              Extra benefits and recommended hosting to host your product{" "}
            </h3>
            <h4>Please provide some information:</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4 mt-5">
            <div class="mb-3">
              <select id="disabledSelect" class="form-select">
                <option>Name of Products</option>
                <option>Nectar HRMS</option>
                <option>Nectar GPS Tracker</option>
                <option>nDatu - Task Manager</option>
                <option>Nerro Trac-Bug Tracker</option>
                <option>NT3-ITSM Tool</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div class="mb-3">
              <select id="disabledSelect" class="form-select">
                <option>Number of Users</option>
                <option>Users1</option>
                <option>Users2</option>
                <option>Users3</option>
                <option>Users4</option>
                <option>Users5</option>
              </select>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="landing_card3" style={{ marginBottom: "40%" }}>
              <h1>Explore Nectar's related apps</h1>
              <Card2 />
              {/* <div style={{ marginBottom: "40%" }}></div> */}
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Cart;
