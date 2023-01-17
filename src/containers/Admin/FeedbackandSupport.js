import React from "react";
import FeedbackandsupportFilter from "../../Components/Admin/FeedbackandsupportFilter";
import ReactPaginate from "react-paginate";
import DummyData from "../DummyNectarCRM";
import { useState } from "react";
const FeedbackandSupport = () => {
  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(
    DummyData?.AdminReviewFeedbackData.length / usersPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col col-lg-6">
          <h4 className="mt-3 mb-2" style={{color:"#666666"}}>Users Reviews & Feedback</h4>
        </div>
        <div className="col userMenuFilter">
          <FeedbackandsupportFilter />
        </div>
        <div>
          <hr />
        </div>
      </div> 

      <div className="row">
        {DummyData &&
          DummyData.AdminReviewFeedbackData.slice(
            pagesVisited,
            pagesVisited + usersPerPage
          ).map((data) => (
            <div className="col-12 col-sm-6 col-lg-8 mt-4 " style={{fontSize:"12px" ,color:"#838383"}}>
              <img
                className="Review_icon"
                src={data.image}
                style={{ height: "40px" }}
                alt="..."
              />
              <h5 className="review_title ">
                {data.title}
                <span className="review_star">
                  <span class="fa fa-star checked "></span>
                  <span class="fa fa-star checked m-1"></span>
                  <span class="fa fa-star checked m-1"></span>
                  <span class="fa fa-star checked m-1"></span>
                  <span class="fa fa-star checked m-1"></span>
                </span>

                <span style={{ fontSize: "15px" }}>{data.desiganation}</span>
              </h5>

              <p className="review_adress">{data.address}</p>

              <p style={{ marginLeft: "80px" }}>{data.description}</p>

              <p style={{ marginLeft: "80px" }}>
                <i class=" p-2 fa-solid fa-comment"></i>Leave a Comment
              </p>
            </div>
          ))}
        <div className="col-md-7"></div>
        <div
          className="col-md-5 product_pagination"
          style={{
            display: "inherit",
            marginBottom: "20px",
            marginTop: "20px",
            color:"#8C8C8C"
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
  );
};

export default FeedbackandSupport;
