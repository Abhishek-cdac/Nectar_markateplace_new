import React, { useState } from "react";
import dummydataProduct from "../containers/Productdata";
import { useNavigate } from "react-router-dom";
import EnquiryForm from "./EnquiryForm";
import Card2 from "./Header/card2";
import ReactPaginate from "react-paginate";

function Products() {
  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 7;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(
    dummydataProduct?.ProductData.length / usersPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const navigate = useNavigate();
  return (
    <div className="container productContainer">
      <div className="row">
        {dummydataProduct &&
          dummydataProduct.ProductData.slice(
            pagesVisited,
            pagesVisited + usersPerPage
          ).map((data) => (
            <div className="col-lg-3 col-sm-12 col-md-6 mt-3 col-xl-3 col-xs-12 productCardmain">
              <div class="card text-center productCard" style={{fontSize:"13px"}}>
                <img class="text-center" src={data.image} alt="" />
                <div class="card-body">
                  <p class="card-text text-center">{data.cardbody}</p>
                  <p style={{ color: "#F16728" }}>
                    {data.subtext}{" "}
                    <span style={{ color: "black" }}>{data.subtext2}</span>
                  </p>
                  <p>
                    {data.productmrp}{" "}
                    <span style={{ color: "#F16728" }}>
                      <s>{data.productprice}</s>
                    </span>
                  </p>
                  <p>{data.producttaxes}</p>
                  <button
                    class="btn btn-primary"
                    onClick={() => navigate("/cart")}
                  >
                    {data.cardButton1}
                  </button>
                  <button
                    class="btn btn-primary m-2"
                    onClick={() => navigate("/getproduct")}
                  >
                    {data.cardButton2}
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
  );
}

export default Products;
