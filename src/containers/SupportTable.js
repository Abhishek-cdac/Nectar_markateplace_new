import React, { useState } from "react";
import DummyData from "./DummyNectarCRM";
import ReactPaginate from "react-paginate";

const SupportTable = () => {
  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(
    DummyData?.viewActiveOfferData.length / usersPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="container-fluid">
      <div className="col-lg-12 col-sm-8 col-md-12">
        <div className="row">
          <div className="table-responsive">
            <table class="table table-bordered ">
              <thead>
                {/* {DummyData &&
                DummyData.viewActiveOffer
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .map((data) => (
                    <tr>
                      <th scope="col" className="tablehead">{data.offer}</th>
                      <th scope="col">{data.onproduct}</th>
                      <th scope="col">{data.offerDate}</th>
                      <th scope="col">{data.offertype}</th>
                      <th scope="col">{data.validity}</th>
                      <th scope="col">{data.Status}</th>
                      <th scope="col">{data.icons}</th>
                    </tr>
                  ))} */}
                <tr className="viewofferhead">
                  <th scope="col">
                    <h5>offer</h5>
                  </th>
                  <th scope="col">
                    <h5>onproduct</h5>
                  </th>
                  <th scope="col">
                    <h5>offerDate</h5>
                  </th>
                  <th scope="col">
                    <h5>offertype</h5>
                  </th>
                  <th scope="col">
                    <h5>validity</h5>
                  </th>
                  <th scope="col">
                    <h5>Status</h5>
                  </th>
                  <th scope="col">
                    <h5>icons</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                {DummyData &&
                  DummyData.viewActiveOfferData
                    .slice(pagesVisited, pagesVisited + usersPerPage)
                    .map((data) => (
                      <tr className="viewofferdata">
                        {/* <th scope="row">{data.offer}</th> */}
                        <td>{data.offer}</td>
                        <td>{data.onproduct}</td>
                        <td>{data.offerDate}</td>
                        <td>{data.offertype}</td>
                        <td>{data.validity}</td>
                        {/* <button className="paid-btn m-2">{data.Status}</button> */}
                        <td>{data.Status}</td>

                        <td className="viewactiveoffericons">
                          <i class="fa-regular fa-eye"></i>
                          <i class="fa-sharp fa-solid fa-pen"></i>
                          <i class="fa-solid fa-trash"></i>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
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
  );
};

export default SupportTable;
