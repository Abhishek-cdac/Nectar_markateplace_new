import React, { useState } from "react";
import dummyData from "../containers/Dummydata";
import EnquiryForm from "./EnquiryForm";
import Card2 from "./Header/card2";
import ReactPaginate from "react-paginate";
function HostingServices() {
  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(dummyData?.hostingCardData.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="container">
        <div className="hostingservices">
          <div className="row">
            <h6>Nectar Hosting Services</h6>
            {dummyData?.hostingCardData.slice(pagesVisited, pagesVisited + usersPerPage)
              .map((items) => (
                <div className="col-lg-3" style={{ margin: "2em" }}>
                  <div
                    class="card text-center"
                    style={{ borderRadius: "none" }}
                  >
                    <div class="card-body" >
                      <img
                        style={{ width: "50%", height: "125px" }}
                        src={items.image}
                        alt=""
                      />
                      <hr />
                      <h5 class="hostingtitle" style={{fontSize:"15px"}}>{items.title}</h5>
                      <h6 class="card-text" style={{ color: "#f16728" ,fontSize:"15px" }}>
                        {items.discount}{" "}
                        <span style={{ color: "black" ,fontSize:"15px"}}>{items.price}</span>
                      </h6>
                      <h6 class="card-text">
                        M.R.P.:{" "}
                        <span style={{ color: "#f16728" ,fontSize:"15px"}}>{items.mrp}</span>
                      </h6>
                      <h6 class="card-text" style={{fontSize:"15px"}} >{items.taxes}</h6>
                      <hr />
                      <button
                        href="#"
                        class="btn btn-primary"
                        style={{ width: "100%", border: "none" }}
                      >
                        Explore All Benefits
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="row">
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
          <div className="row pt-5">
            <EnquiryForm />
            <div className="landing_card2 mt-5">
              <h1>Explore Nectar's related apps</h1>
              <Card2 />
              <div style={{ marginBottom: "10%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HostingServices;
