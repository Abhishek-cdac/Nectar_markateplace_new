import React from "react";
import Header from "../Components/Header/Header";
import LandingBanner from "../Components/Header/LandingBanner";
import Landingbanner2 from "../Components/Header/Landingbanner2";
import Toggle from "../Components/Header/Toggle";
function landingpage() {
  return (
    <div>
      <Header />
      <LandingBanner />
      <Landingbanner2/>
      <Toggle/>

    </div>
  );
}

export default landingpage;
