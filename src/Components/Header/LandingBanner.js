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
        <h1>Explore Apps For Nectar</h1>
        <p>
          Integrate Nector applications with all the tools for your business
          needs
        </p>
      </div>
    </>
  );
}

export default LandingBanner;
