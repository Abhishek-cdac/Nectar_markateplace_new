import React from "react";
import Footer from "./Footer";
import Card2 from "./Header/card2";

function productsFooter() {
  return (
    <div>
      {" "}
      <section id="product-footer-card">
        <div className="container">
            <div className="product-footer-heading">
                <h3>Explore Nectar's Related Apps</h3>
            </div>
          <div className="landing_card2">
            <Card2 />
          </div>
         
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default productsFooter;
