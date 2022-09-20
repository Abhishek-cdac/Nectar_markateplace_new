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
import GPSOverview from "./Components/GPSOverview";
import Feature from "./Components/Feature";
import GPSAccordian from "./Components/GPSAccordian";
import NerroTracOverview from "./Components/NerroTracOverview";
import NT3Overview from "./Components/NT3Overview";
import NDatuOverview from "./Components/NDatuOverview";
import NDatuFeatures from "./Components/NDatuFeatures";
import Login from "./containers/Admin/AdLogin";
import NectarCRMtabs from "./containers/NectarCRMtabs"
import NectarHRMS from "./Components/NectarHRMS";
import NectarGPS from "./Components/NectarGPS";
import NerroTrac from "./Components/NerroTrac";
import ITSMTool from "./Components/ITSMTool";
import NDatu from "./Components/NDatu";
import NectarHRMStab from "./Components/NectarHRMStab";
import NectarGPSTracertab from './Components/NectarGPSTracertab'
import NerroTractab from './Components/NerroTractab'
import ITSMTooltab from "./Components/ITSMTooltab";
import NDatutab from './Components/NDatutab'
import Navbar from './Components/Navbar'
import ContactDetails from "./Components/ContactDetails";

import Profile from "./Components/Profile";
import Invoices from "./Components/Invoices";





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/navbar" element={<Navbar/>}></Route>
          <Route path="/invoices" element={<Invoices/>}></Route>
          <Route path="/contactdetails" element={< ContactDetails/>}></Route>
    
          <Route path="/profile" element={<Profile/>}></Route>
  
          {/*Overview Page*/}
          <Route path="/gpsoverview" element={<GPSOverview />} />
          <Route path="/hrmsoverview" element={<HRMS />} />
          <Route path="/nt3overview" element={<NT3Overview />} />
          <Route path="/nerrotracoverview" element={<NerroTracOverview />} />
          <Route path="/ndatuoverview" element={<NDatuOverview />} />
          <Route path="/ndatufeatures" element={<NDatuFeatures />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/gpsaccordian" element={<GPSAccordian />} />
          {/*Header page*/}
          <Route path="/ndatu" element={<NDatu/>} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/becomeApartner" element={<BecomeAPartner />} />
          <Route path="/productscreen" element={<Productscreen />} />
          <Route path="/nectarcrmreview" element={<NectarCRMReview />} />
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/review" element={<CRMReview />}></Route>
          <Route path="/crm" element={<CRM/>} />
          <Route path="/productscreen" element={<Productscreen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/telecomeservices" element={<TelecomeServices />} />
          <Route path="/hostingservices" element={<HostingServices />} />
          <Route path="/modal" element={<Modal />} />
          {/*All Tab*/}
          <Route path="/nectarcrmtab" element={<NectarCRMtabs />} />
          <Route path="/nectarhrmstab" element={<NectarHRMStab />} />
          <Route path="/nectarcrmgpstracertab" element={<NectarGPSTracertab />} />
          <Route path="/nerrotractab" element={<NerroTractab />}></Route>
          <Route path="/itsmtooltab" element={<ITSMTooltab />}></Route>
          <Route path="/ndatutab" element={<NDatutab />}></Route>
          {/* Routes of Reseller */}
          <Route path="reseller" element={<SideNav />}>
            <Route path="" element={<PartnerDashboard />} />
          </Route>
          {/* Routes For Admin Part */}
          <Route path="admin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
