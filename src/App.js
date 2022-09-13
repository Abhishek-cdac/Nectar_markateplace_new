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
