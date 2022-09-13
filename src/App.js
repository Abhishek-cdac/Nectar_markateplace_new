// import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./containers/landingpage";
import LoginPage from "./containers/LoginPage";
import Register from "./containers/Register";
// import LoginPage from "./containers/LoginPage";
import BecomeAPartner from "./Components/Header/BecomeAPartner";
import Productscreen from "./Components/productScreen";
import NectarCRMReview from "./Components/NectarCRMReview";
import CRMReview from "./Components/CRMreview";
import Notification from "./Components/Notification";
import CRM from "./Components/CRM"
import HRMS from "./Components/HRMS";
import Products from "./Components/Products"





import Cart from "./Components/Cart";
import ForgetPassword from "./containers/ForgetPassword";
import TelecomeServices from "./Components/TelecomeServices";
import HostingServices from "./Components/HostingServices";
import Modal from "./Components/Header/Modal";
import SideNav from "./Components/SideNav";
import PartnerDashboard from "./containers/partnerDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hrms" element={<HRMS/>} />
          <Route path="/products" element={<Products/>} />
     
   

          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/becomeApartner" element={<BecomeAPartner />} />
          <Route path="/productscreen" element={<Productscreen />} />


          <Route path="/nectarcrmreview" element={<NectarCRMReview />} />
        
          
        

          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/review" element={<CRMReview />}></Route>
          <Route path="/crm" element={<CRM
            title="Nectar CRM"
            subtext1="The easy to use and customizable CRM for your Marketing, Sales,
            & Customer Service Teams."
            item1="Better Sales Performance"
            item2="Increased Profitability & Efficiency "
            item3="CRM Improves Your Customer Service"
            heading="Get 2 months Free Subscription"
            buttontext="Free Demo"
            buttontext2="Buy Now"
          />} />
    
         
          <Route path="/productscreen" element={<Productscreen/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/telecomeservices" element={<TelecomeServices />} />
          <Route path="/hostingservices" element={<HostingServices />} />
          <Route path="/modal" element={<Modal />} />
          {/* Routes of Reseller */}
          <Route path="reseller" element={<SideNav />}>
          <Route path="" element={<PartnerDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
