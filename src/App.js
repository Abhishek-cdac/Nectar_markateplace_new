// import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./containers/landingpage";
import LoginPage from "./containers/LoginPage";
import Register from "./containers/Register";
// import LoginPage from "./containers/LoginPage";
import BecomeAPartner from "./Components/Header/BecomeAPartner";
import Productscreen from "./Components/productScreen";
import Cart from "./Components/Cart";
import ForgetPassword from "./containers/ForgetPassword";
import TelecomeServices from "./Components/TelecomeServices";
import HostingServices from "./Components/HostingServices";
import Modal from "./Components/Header/Modal";
import SideNav from "./Components/SideNav";
import PartnerDashboard from "./containers/partnerDashboard";
import Login from "./containers/Admin/AdLogin";
import NectarCRMtabs from "./containers/NectarCRMtabs"
import Resources from "./Components/Resources";
import Settings from "./Components/Settings";
import PricingCard from "./Components/PricingCard"
import PriceFiltering from "./Components/PriceFiltering";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/becomeApartner" element={<BecomeAPartner />} />
          <Route path="/productscreen" element={<Productscreen/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/telecomeservices" element={<TelecomeServices />} />
          <Route path="/hostingservices" element={<HostingServices />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="nectarCRM" element={<NectarCRMtabs />} />
          <Route path="pricing" element={<PricingCard />} />
          <Route path="filtering" element={<PriceFiltering />} />
          {/* Routes of Reseller */}
          <Route path="reseller" element={<SideNav />}>
          <Route path="" element={<PartnerDashboard />} />
          </Route>

          {/* Routes For Admin Part */}
          <Route path="admin" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
