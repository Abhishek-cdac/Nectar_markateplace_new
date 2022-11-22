import React from "react";
import CryptoHeader from "./CryptoHeader";
import dummyData from "../containers/Dummydata";

import "./CryptoSend.css";


function CryptoSend() {
  return (
    <div>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal">
        kdsg'l;
      </button>
      <div
        className="modal fade crypto-send-modal "
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
              <p style={{ color: "black" }}>
                You are sending ETH to Nectar Infotel Solutions Pvt. Ltd{" "}
                <hr></hr>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoSend;
