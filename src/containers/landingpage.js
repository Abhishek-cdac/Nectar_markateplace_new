import React, { useState } from "react";
import ClientSays from "../Components/Header/ClientSays";
import Frequently from "../Components/Header/Frequently";
import Header from "../Components/Header/Header";
import LandingBanner from "../Components/Header/LandingBanner";
import Landingbanner2 from "../Components/Header/Landingbanner2";
import ReviewForm from "../Components/ReviewForm";
import Footer from "../Components/Footer";
const Landingpage = () => {
  return (
    <div >
      <Header />
      <LandingBanner />
      <Landingbanner2 />
      <Frequently />
      <ReviewForm />
      <ClientSays />
      <Footer/>
    </div>
  );
};

export default Landingpage;
