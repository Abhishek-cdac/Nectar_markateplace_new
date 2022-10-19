import React from "react";

import "./Paymentmanagment.css";
import { useNavigate } from "react-router-dom";
import dummyData from "../Dummydata";

function Paymentmanagment2() {
  const navigate = useNavigate();
  return (
    <div className="container">
      {dummyData &&
        dummyData.Paymentmanagment2.map((data) => (
          <div className="row">
            <div className="col-md-12">
              <nav class="navbar bg-white">
                <div class="container">
                  <a class="navbar-brand" href="#">
                    <i
                      class="fa fa-long-arrow-left"
                      onClick={() => navigate(data.url)}
                      aria-hidden="true"
                    ></i>
                    <img
                      src={data.img}
                      alt="Bootstrap"
                      //   width="35"
                      //   height="24"
                    />
                    <span className="text-muted"> {data.name}</span>
                  </a>
                </div>
              </nav>
            </div>
            <div className="row">
              <div className="col-md-12 mt-4">
                <div className="backgraound_white p-3">
                  <h5 className> {data.title}</h5>
                  <div className="row">
                    <div className="col-md-6 mt-4">
                      <form>
                        <span> {data.payername}</span>
                        <input
                          style={{ height: "38px" }}
                          type="text"
                          name="firstname"
                          className="inputfield paymentManInput"
                          placeholder={data.placeholder}
                        />{" "}
                      </form>
                      <br></br>
                      <form>
                        <span>{data.subscriptiontype}</span>
                        <input
                          style={{ height: "38px" }}
                          type="text"
                          name="firstname"
                          className="paymentManInput"
                          placeholder={data.placeholderpatner}
                        />
                      </form>
                      <br></br>
                      <form>
                        <span> {data.amount}</span>

                        <input
                          style={{ height: "38px" }}
                          type="text"
                          name="firstname"
                          className="paymentManInput"
                          placeholder={data.placeholderamount}
                        />
                      </form>
                      <br></br>
                      <form>
                        <span> {data.transactionid}</span>

                        <input
                          style={{ height: "38px" }}
                          type="text"
                          name="firstname"
                          className="transaction-id paymentManInput"
                          placeholder={data.placeholdertransactionid}
                        />
                      </form>
                    </div>

                    <div className="col-md-6 mt-4">
                      <form>
                        <span> {data.productname}</span>

                        <input
                          style={{ height: "38px" }}
                          type="text"
                          name="firstname"
                          className="paymentManInput"
                          placeholder="Nectar HRMS"
                        />
                      </form>
                      <br></br>
                      <form>
                        <span>{data.transactionmode}</span>
                        <input
                          style={{ height: "38px" }}
                          type="text"
                          name="firstname"
                          className="paymentManInput"
                          placeholder={data.placeholdertrasactionmode}
                        />
                      </form>
                      <br></br>
                      <form>
                        <span> {data.invoiceno}</span>

                        <input
                          style={{ height: "38px" }}
                          type="text"
                          name="firstname"
                          className="invoice-number paymentManInput"
                          placeholder={data.placeholderinvoiceno}
                        />
                      </form>
                      <br></br>

                      <form>
                        <span> {data.status}</span>

                        <input
                          style={{ height: "38px" }}
                          type="text"
                          name="firstname"
                          className="paymentManInput"
                          placeholder={data.placeholderstatus}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Paymentmanagment2;
