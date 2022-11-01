import React, { useState } from "react";

import ReactPaginate from "react-paginate";
import Dummuydataordermanagment from "./Dummuydataordermanagment";
import Paymentmenu from "../../Components/Admin/Paymentmenu";
import { useNavigate } from "react-router-dom";

function PaymentManagment() {
  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(
    Dummuydataordermanagment?.paymentmanagentdata.length / usersPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="my-3" style={{ color: "#858585" }}>
              Payment Management
            </h4>
            <hr className="style1" />
            <div className="row">
              <div className="col-md-4">
                <div class="mb-3">
                  <div class="position-relative">
                    <i class="fa fa-search position-absolute"></i>
                    <input
                      class="form-control PaymentInput"
                      type="search"
                      placeholder="search"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <button className="btn-sarch text-center">Search</button>
              </div>

              <div className="col-md-5 text-end">
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
                      Dummuydataordermanagment.paymentmanagentdata
                        .slice(pagesVisited, pagesVisited + usersPerPage)
                        .map((data) => (
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
                              onClick={() => navigate(data.url)}
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
                        ))}
                  </tbody>
                </table>
              </div>
              
            </div>
            <div className="col-md-7"></div>
              <div
                className="col-md-5 product_pagination"
                style={{
                  display: "inherit",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <ReactPaginate
                  previousLabel={<i class="fa-solid fa-less-than"></i>}
                  nextLabel={<i class="fa-solid fa-greater-than"></i>}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentManagment;
