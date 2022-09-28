import React from "react";
import "./OrderManagment.css";
import DummydataModal from "./DummydataModal";
import Dummuydataordermanagment from "./Dummuydataordermanagment";
function OrderManagment() {
  return (
    <div className="container">
      <div className="row">
        <h4 className="my-3">Order Management</h4>
        <hr className="style1" />
        <div className="row">
          <div className="col-md-6">
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="search"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div className="col-md-3">
            <button className="btn-search text-center">Search</button>
          </div>

          <div className="col-md-3 text-end">
            <i
              type="button"
              className="fa fa-bars"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            ></i>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style={{ width: "200px" }}>
            <div class="modal-content">
              <div class="modal-header">
                <p class="modal-title" id="exampleModalLabel">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        {DummydataModal &&
                          DummydataModal.modaldata.map((data) => (
                            <div>
                              <p className="pt-3 fs-h6">{data.product}</p>
                              <div className="mx-2">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault1"
                                  >
                                    {data.productName1}
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault2"
                                  >
                                    {data.productName2}
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault2"
                                  >
                                    {data.productName3}
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault2"
                                  >
                                    {data.productName4}
                                  </label>
                                </div>
                              </div>
                              <p className="">{data.paymentmode}</p>
                              <div className="mx-2">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault1"
                                  >
                                    {data.paymentmode1}
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault2"
                                  >
                                    {data.paymentmode2}
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault2"
                                  >
                                    {data.paymentmode3}
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault2"
                                  >
                                    {data.paymentmode4}
                                  </label>
                                </div>
                              </div>
                              <p>{data.paymentstatus}</p>
                              <div className="mx-2">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault1"
                                  >
                                    {data.paymentstatus1}
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault2"
                                  >
                                    {data.paymentstatus2}
                                  </label>
                                </div>
                              </div>
                              <p>{data.paymentDate}</p>
                              <div className="mx-2">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault1"
                                  >
                                    {data.paymentDate1}
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault2"
                                  >
                                    {data.paymentDate2}
                                  </label>
                                </div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                  />
                                  <label
                                    class="form-check-label text-dark"
                                    for="flexRadioDefault2"
                                  >
                                    {data.paymentDate3}
                                    <span className="mx-3">
                                      <i
                                        class="fa fa-calendar"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <table class="table">
            <thead>
              {Dummuydataordermanagment &&
                Dummuydataordermanagment.orderManagment.map((data) => (
                  <tr>
                    <th scope="col">{data.Number}</th>
                    <th scope="col">{data.fullName}</th>
                    <th scope="col">{data.orderId}</th>
                    <th scope="col">{data.orderDate}</th>
                    <th scope="col">{data.Amount}</th>
                    <th scope="col">{data.Status}</th>
                    <th scope="col">{data.Action}</th>
                  </tr>
                ))}
            </thead>
            <tbody>
              {Dummuydataordermanagment &&
                Dummuydataordermanagment.orderManagmentdata.map((data) => (
                  <tr>
                    <th scope="row">{data.Number}</th>

                    <td>{data.fullName}</td>
                    <td style={{ color: "#3CA3CF" }}>{data.orderId}</td>
                    <td>{data.orderDate}</td>
                    <td>{data.Amount}</td>
                    <button className="paid-btn m-2">{data.Status}</button>
                    <td><i class="fa fa-eye m-2" aria-hidden="true"></i><span><i class="fa fa-trash mx-4" aria-hidden="true"></i></span></td>
                   
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderManagment;
