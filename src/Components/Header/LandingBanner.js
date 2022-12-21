import React from "react";

function LandingBanner() {
  return (
    <>
      <div class="image-wrap">
        <div class="img-content">
          <img src="/assets/images/BG.webp" alt="" />
        </div>
      {/* <div class="overlay"></div> */}
      </div>
      <div class="banner-content">
        <h2>Explore Apps For Nectar</h2>
        <p style={{color:"#FFFFFF",fontSize:"medium",opacity:"1",letterSpacing:"0.1" , paddingTop:"5px"}}>
          Integrate Nector applications with all the tools for your business
          needs
        </p>
      </div>
    </>
  );
}

export default LandingBanner;
