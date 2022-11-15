import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";
import Header2 from "../Components/Header/Header2";
import Landingpage from "./landingpage";

const CryptoSigninPage = () => {
  return (
    <>
      <Header2 />
      <div className="container">
        <div className="row">
          <p className="pt-5">Create an NFT Wallet</p>
          <p className="m-4">Back</p>
        </div>
        <div className="row m-4">
          <div className="col-md-3 ">
            <div class="card" style={{ height: "300px", borderRadius: "20px"  ,border:"1px solid #707070"}}>
              <img
                style={{ margin: "auto", paddingTop: "50px" }}
                src="\assets\images\metamask.png"
                class="card-img-top"
                alt="..."
                height={'400px'}
              />
              <div class="card-body">
                <h5
                  className="text-center pt-5"
                  style={{ fontSize: "30px", color: "#08668F" }}
                >
                  MetaMask
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" style={{ height: "300px", borderRadius: "20px" ,border:"1px solid #707070"}}>
              <img
                style={{ margin: "auto", paddingTop: "50px" }}
                src="\assets\images\crypto3.png"
                class="card-img-top"
                alt="..."
                height={'400px'}
              />
              <div class="card-body">
                <h5
                  className="text-center pt-5"
                  style={{ fontSize: "30px", color: "#08668F" }}
                >
                  WalletConnnect
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" style={{ height: "300px", borderRadius: "20px" ,border:"1px solid #707070" }}>
              <img
                style={{ margin: "auto", paddingTop: "50px" }}
                src="\assets\images\crypto.png"
                class="card-img-top"
                alt="..."
                height={'400px'}
              />
              <div class="card-body">
                <h5
                  className="text-center pt-5"
                  style={{ fontSize: "30px", color: "#08668F" }}
                >
                  Formatic
                </h5>
              </div>
            </div>
          </div>
        </div>

        
        <div class="card shadow-lg img-fluid"  >
            <div className="row">
            <div class="col-md-4">
            <img
                // style={{marginTop:"80px" ,marginLeft:"200px",height:"125px" , width:"125px"}}
                src="\assets\images\metamask.png"
                class="card-img-top  rounded mx-auto mt-5 d-block"
                alt="..."
              />

            </div>
            <div className="col-md-8 pt-5">
              <h2>Connect Your Meta Wallet</h2>
              
            <button type="submit" class="btn btn-primary btn-lg submit_form">
              Sign In
            </button>
           {/* <p style={{color:"#F17626" ,textDecorationStyle:"dashed"}}>
                
             
            </p>  */}
            <p className="pt-4"><span style={{borderBottom:"2px dotted" ,color:"#F17626"}}>
            Learn how to use Metamask Wallet</span></p>
    
            </div>
            </div>
            
        </div>

         
      </div>
      <br />
      <br />
      <br />
      <br />
 <Footer />
      
    </>
  );
};

export default CryptoSigninPage;
