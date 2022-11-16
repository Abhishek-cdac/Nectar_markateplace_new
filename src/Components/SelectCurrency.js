import React from "react";
import CryptoHeader from "./CryptoHeader";
import dummyData from "../containers/Dummydata";

import "./CryptoSend.css";
import CryptoSend from "./CryptoSend";
import { useState } from "react";

import CureencyTable from "../containers/CureencyTable";
import CongratulationModal from "../containers/CongratulationModal"

function SelectCurrency() {
  const [changeCurr, setChangeCurr] = useState(false);

  const onAddRowClick = () => {
    setChangeCurr(true);
  };

  return (
    <div>
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

              <table
                className="table table-bordered"
                style={{ display: changeCurr == false ? "table" : "none" }}
              >
                <tbody>
                  {dummyData &&
                    dummyData.Currencyselect.map((data) => (
                      <tr>
                        <td>
                          <img src={data.img} style={{ height: "30px" }}></img>
                        </td>
                        <td> {data.ruppes}</td>
                        <td
                          style={{ color: "#08668F", fontSize: "12px" }}
                          onClick={onAddRowClick}
                        >
                          {data.selectcurrency}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              {changeCurr ? <CureencyTable /> : null}
              <button
                type="button"
                style={{ marginTop: "70% " }}
                class="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#congratulationeModal"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      <CongratulationModal/>
    </div>
  );
}

export default SelectCurrency;
