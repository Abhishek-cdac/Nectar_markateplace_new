import React from "react";
import dummyData from "../containers/Dummydata";
import "./Cryptocurrency.css";

function Cryptocurrency() {
  return (
    <div className="container metamask-header">
      <div className="row metamask-header">
        <div className="col-md-6 col-sm-12">
          <img
            className="metamask-img"
            src="/assets/images/metamask.png"
            style={{ height: "70px" }}
          ></img>
          <h3
            className="d-md-inline-flex mx-4
"
          >
            MetaMask
          </h3>
        </div>
        <div className="col-md-6 col-sm-12 ethereum-mainnet-dropdown">
          <div class="dropdown rounded float-end me-5">
            <button
              class="btn btn-secondary dropdown-toggle  justify-content-end "
              style={{ marginTop: "12%" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <li>Ethereum Mainnet</li>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <img
            class="position-absolute top-0 end-0 mx-5 mt-3 "
            src="/assets/images/Group 3045.png"
            style={{ height: "50px" }}
          ></img>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="back-text mt-5"> Back</p>

          <p class="d-flex justify-content-center" style={{ marginTop: "-5%" }}>
            Account 1
          </p>

          <div class="d-flex justify-content-center">
            OxC46....22021{" "}
            <span>
              <i class="fa-solid fa-copy"></i>
            </span>
          </div>
          <p className="horizontaly-line-crypto"></p>
          <img
            class="rounded mx-auto d-block"
            src="/assets/images/Group 3042.png"
            style={{ height: "80px" }}
          ></img>
          <h4 class="d-flex justify-content-center">0.032 ETH</h4>
          <p class="d-flex justify-content-center">$ 150.00 USD</p>
          <div className="cripto-img">
            <div className="buy-img">
              <img
                class="rounded mx-auto d-block"
                src="/assets/images/Group 3044.svg"
                style={{ height: "50px" }}
              ></img>
              <p>buy</p>
            </div>
            <div className="buy-img">
              <img
                class="rounded mx-auto d-block"
                src="/assets/images/Group 353.svg"
                style={{ height: "50px" }}
              ></img>

              <p>send</p>
            </div>
            <div className="buy-img">
              <img
                class="rounded mx-auto d-block"
                src="/assets/images/Group 3043.svg"
                style={{ height: "50px" }}
              ></img>
              <p>swap</p>
            </div>
          </div>
          <div class="row assest">
            <div class="col  text-center" style={{ color: "#08668F" }}>
              Assets
            </div>
            <div class="col  text-center" style={{ color: "#08668F" }}>
              Activity
            </div>
            <h1></h1>
          </div>

          <div
            id="carouselExampleControlsNoTouching"
            class="carousel slide"
            data-bs-touch="false"
          >
            <div class="carousel-inner">
              {dummyData&&
               dummyData.Cryptocurrency.map((data) => (
                  <div class="carousel-item active">
                    <img
                      src="/assets/images/Group 3042.png"
                      style={{ height: "80px", marginTop: "-3%" }}
                    ></img>
                    <div className="content-eth">
                      <h4>0.032 ETH</h4>
                      <p>$ 150.00 USD</p>
                    </div>

                    <p className="horizontaly-line-crypto mt-4"></p>
                  </div>
                ))}
              <div class="carousel-item">
                <img
                  src="/assets/images/Group 3042.png"
                  style={{ height: "80px", marginTop: "-3%" }}
                ></img>
                <div className="content-eth">
                  <h4>0.032 ETH</h4>
                  <p>$ 150.00 USD</p>
                </div>

                <p className="horizontaly-line-crypto mt-4"></p>
              </div>
              <div class="carousel-item">
                <img
                  src="/assets/images/Group 3042.png"
                  style={{ height: "80px", marginTop: "-3%" }}
                ></img>
                <div className="content-eth">
                  <h4>0.032 ETH</h4>
                  <p>$ 150.00 USD</p>
                </div>

                <p className="horizontaly-line-crypto mt-4"></p>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <p class="d-flex justify-content-center">Don't see your token?</p>
          <p class="d-flex justify-content-center" style={{ color: "#08668F" }}>
            Refresh list
            <span className="mx-1" style={{ color: "#615D5D" }}>
              or{" "}
            </span>
            import tokens
          </p>
          <h4 class="d-flex justify-content-center mt-5">
            Need help? Contact
            <span style={{ color: "#08668F" }}>
              {" "}
              Nectar Marketplace Support
            </span>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Cryptocurrency;
