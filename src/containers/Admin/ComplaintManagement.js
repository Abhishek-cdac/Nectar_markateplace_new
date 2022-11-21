import ReactPaginate from "react-paginate";
import Complaintmanagementfilter from "../../Components/Admin/Complaintmanagementfilter";
import Tables from "../../Components/Admin/Tables";
import dummyData from "../Dummydata";
import DummyData from "../DummyNectarCRM";
import SupportTable from "../SupportTable";
import React, { useState } from "react";
 
const ComplaintManagement = () => {

   //pagination
   const [pageNumber, setPageNumber] = useState(0);
   const usersPerPage = 10;
   const pagesVisited = pageNumber * usersPerPage;
   const pageCount = Math.ceil(
    DummyData?.ComplaintManagementData.length / usersPerPage
   );
   const changePage = ({ selected }) => {
     setPageNumber(selected);
   };
  return (
    <>
      <div className="container" >
        <div className="row" >
          <div className="col col-lg-6">
            <h4 style={{color:"#666666"}}>Complaint Management</h4>
          </div>
          <div className="col userMenuFilter">
            <Complaintmanagementfilter />
          </div>
          <div>
            <hr />
          </div>
        </div>
        <div className="row"  >
          <div className="table-responsive">
        
          <Tables
            
            column={DummyData?.ComplaintManagementHeading}
            data={DummyData.ComplaintManagementData .slice(pagesVisited, pagesVisited + usersPerPage)
            }
          />
          </div>
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
    </>
  );
};

export default ComplaintManagement;
