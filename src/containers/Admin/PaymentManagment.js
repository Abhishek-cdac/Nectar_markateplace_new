import React from "react";

import Dummuydataordermanagment from "./Dummuydataordermanagment";
import Paymentmenu from "../../Components/Admin/Paymentmenu";
import { useNavigate } from "react-router-dom";

function PaymentManagment() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="my-3">Payment Management</h4>
            <hr className="style1" />
            <div className="row">
              <div className="col-md-6">
                <div class="mb-3">
                  {/* <input
                  type="email"
                  class="form-control search"
                  id="exampleInputEmail1"
                  placeholder="search"
                  aria-describedby="emailHelp"
                /> */}
                  <div class="position-relative">
                    <i class="fa fa-search position-absolute"></i>
                    <input
                      class="form-control"
                      type="search"
                      placeholder="search"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <button className="btn-sarch text-center">Search</button>
              </div>

              <div className="col-md-3 text-end">
                {/* <i className="fa fa-bars"></i> */}
                <Paymentmenu />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="ordermanagment-table">
                <table class="table ordermanagment-table">
                  <thead>
                    {Dummuydataordermanagment &&
                      Dummuydataordermanagment.paymentmanagent.map((data) => (
                        <tr>
                          <th scope="col">{data.Organization}</th>
                          <th scope="col">{data.Product}</th>
                          <th scope="col">{data.PaymentDate}</th>
                          <th scope="col">{data.PaymentMode}</th>
                          <th scope="col">{data.TransactionsID}</th>
                          <th scope="col">{data.Amount}</th>
                          <th scope="col">{data.Status}</th>
                        </tr>
                      ))}
                  </thead>
                  <tbody>
                    {Dummuydataordermanagment &&
                      Dummuydataordermanagment.paymentmanagentdata.map(
                        (data) => (
                          <tr>
                            <td scope="row">{data.Organization}</td>

                            <td>{data.Product}</td>
                            <td style={{ color: "#3CA3CF" }}>
                              {data.PaymentDate}
                            </td>
                            <td>{data.PaymentMode}</td>
                            <td>{data.TransactionsID}</td>
                            <td>{data.Amount}</td>
                            <td
                              onClick={() => navigate("paymentdetails")}
                              className={`${
                                data.Status === "   PAID"
                                  ? "table-paid-btn"
                                  : "table-pending-btn"
                              } m-2`}
                            >
                              
                              {data.Status}
                              {console.log(data.Status)}
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentManagment;
