import React from "react";
import dummydataProduct from "../containers/Productdata";
import {useNavigate} from "react-router-dom"

function Products() {
  const navigate = useNavigate()
  return (
    <div className="container productContainer">
      <div className="row">
        {dummydataProduct &&
          dummydataProduct.ProductData.map((data) => (
            <div className="col-lg-3 col-sm-12 col-md-6 mt-3 col-xl-3 col-xs-12 productCardmain">
              <div class="card text-center productCard">
                <img
                  class="text-center"
                  src={data.image}
                  alt=""
                />
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
                  <button class="btn btn-primary" onClick={()=>navigate("/cart")}>{data.cardButton1}</button>
                  <button class="btn btn-primary m-2" onClick={() =>navigate("/getproduct")}>
                    {data.cardButton2}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
