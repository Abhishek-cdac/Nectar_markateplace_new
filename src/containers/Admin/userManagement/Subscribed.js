import React, { useState } from "react";
import Tables from "../../../Components/Admin/Tables";
import dummyData from "../../Dummydata";
import ReactPaginate from "react-paginate";

const Subscribed = () => {


  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(
    dummyData?.RegisteredUSers.length / usersPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // console.log(activeButt);
  return (
    <>
      <ul class="nav nav-tabs UserTableTabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class={"nav-link active table-nav-link"
          
          }
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            // onClick={() => {
            //   SetActiveButt("home");
            // }}
          >
            partner
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class={"nav-link table-nav-link"} 
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Reseller
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Tables
            column={dummyData?.usersHeading}
            data={dummyData.RegisteredUSers.slice(pagesVisited, pagesVisited + usersPerPage)}
          />
          
        </div>
      
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Tables
            column={dummyData?.usersHeading}
            data={dummyData.RegisteredUSers.slice(pagesVisited, pagesVisited + usersPerPage)}
          />
        </div>
      </div>
      <div className="col-md-7"></div>
              <div
                className="col-md-5 product_pagination"
                style={{
                  display: "inherit",
                  marginBottom: "20px",
                  marginTop: "20px",
                  justifyContent:"end",
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
    </>
  );
};

export default Subscribed;
