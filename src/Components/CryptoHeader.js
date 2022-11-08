import React from "react";

function CryptoHeader() {
  return (
    <div className="container">
      <div className="row metamask-header">
        <div className="col-md-6 col-sm-6 col-sm-6 col-sm-12">
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
    </div>
  );
}

export default CryptoHeader;
