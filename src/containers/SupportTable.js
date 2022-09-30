import React, { useState } from "react";
import DummyData from "./DummyNectarCRM";
import ReactPaginate from "react-paginate";

const SupportTable = () => {
  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(DummyData?.viewActiveOffer.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="container-fluid">
      <div className="col-lg-12 col-sm-8 col-md-12">
        <div className="row">
          <table class="table table-bordered ">
            <thead>
              {DummyData &&
                DummyData.viewActiveOffer
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .map((data) => (
                    <tr>
                      <th scope="col">{data.offer}</th>
                      <th scope="col">{data.onproduct}</th>
                      <th scope="col">{data.offerDate}</th>
                      <th scope="col">{data.offertype}</th>
                      <th scope="col">{data.validity}</th>
                      <th scope="col">{data.Status}</th>
                      <th scope="col">{data.icons}</th>
                    </tr>
                  ))}
            </thead>
            <tbody>
              {DummyData &&
                DummyData.viewActiveOfferData
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .map((data) => (
                    <tr>
                      <th scope="row">{data.offer}</th>

                      <td>{data.onproduct}</td>
                      <td>{data.offerDate}</td>
                      <td>{data.offertype}</td>
                      <td>{data.validity}</td>
                      {/* <button className="paid-btn m-2">{data.Status}</button> */}
                      <td>{data.Status}</td>

                      <i class="fa-regular fa-eye"></i>
                      <i class="fa-sharp fa-solid fa-pen"></i>
                      <i class="fa-solid fa-trash"></i>
                    </tr>
                  ))}
            </tbody>
          </table>
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
              previousLabel={<i class="fa-solid fa-arrow-left fa-lg"></i>}
              nextLabel={<i class="fa-solid fa-arrow-right fa-lg"></i>}
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
