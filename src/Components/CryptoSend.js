import React from "react";
import CryptoHeader from "./CryptoHeader";
import "./CryptoSend.css";

function CryptoSend() {
  return (
    <div>
      <CryptoHeader />

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade crypto-send-modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>

              {/* <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
              <h5>Send to</h5>
              <p style={{ color: "#08668F", fontSize: "15px" }}>Cancel</p>
            </div>
            <div class="modal-body">
              <img
                className="image-search"
                src="/assets/images/search_black_24dp.svg"
              ></img>
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Search, public address (0x), or ENS"
                aria-label=".form-control-lg example"
              />
              <img
                className="image-scanner"
                src="/assets/images/Group 3046.svg"
              ></img>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <p>
                You are sending ETH to Nectar Infotel Solutions Pvt. Ltd{" "}
                <hr></hr>
              </p>

              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="/assets/images/doller.png"
                        style={{ height: "30px" }}
                      ></img>
                    </td>
                    <td>43.88765</td>
                    <td style={{ color: "#08668F", fontSize: "12px" }}>
                      Select This Currency
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/assets/images/ethereum-1-283135.png"
                        style={{ height: "30px" }}
                      ></img>
                    </td>
                    <td>US Dollar</td>
                    <td style={{ color: "#08668F", fontSize: "12px" }}>
                      Select This Currency
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/assets/images/INR.png"
                        style={{ height: "30px" }}
                      ></img>
                    </td>
                    <td>Larry the Bird</td>
                    <td style={{ color: "#08668F", fontSize: "12px" }}>
                      Select This Currency
                    </td>
                  </tr>
                </tbody>
              </table>

              <button type="button mt-5" class="btn btn-primary btn-lg">
              Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoSend;
