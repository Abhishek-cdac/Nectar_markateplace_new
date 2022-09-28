import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./containers/landingpage";
import LoginPage from "./containers/LoginPage";
import Register from "./containers/Register";
import BecomeAPartner from "./Components/Header/BecomeAPartner";
import Productscreen from "./Components/productScreen";
import NectarCRMReview from "./Components/NectarCRMReview";
import CRMReview from "./Components/CRMreview";
import Notification from "./Components/Notification";
import CRM from "./Components/CRM";
import HRMS from "./Components/HRMS";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import ForgetPassword from "./containers/ForgetPassword";
import TelecomeServices from "./Components/TelecomeServices";
import HostingServices from "./Components/HostingServices";
import Modal from "./Components/Header/Modal";
import PartnerDashboard from "./containers/partnerDashboard";
import GPSOverview from "./Components/GPSOverview";
import Feature from "./Components/Feature";
import GPSAccordian from "./Components/GPSAccordian";
import NerroTracOverview from "./Components/NerroTracOverview";
import NT3Overview from "./Components/NT3Overview";
import NDatuOverview from "./Components/NDatuOverview";
import NDatuFeatures from "./Components/NDatuFeatures";

import Login from "./containers/Admin/AdLogin";
import PartnerLanding from "./containers/partnerLanding";
import NectarCRMtabs from "./containers/NectarCRMtabs";
import AdLanding from "./containers/Admin/AdLanding";
import Ex from "./ex";
import NDatu from "./Components/NDatu";
import NectarHRMStab from "./Components/NectarHRMStab";
import NectarGPSTracertab from "./Components/NectarGPSTracertab";
import NerroTractab from "./Components/NerroTractab";
import ITSMTooltab from "./Components/ITSMTooltab";
import NDatutab from "./Components/NDatutab";
import ProfileNavbar from "./Components/ProfileNavbar";
import ContactDetails from "./Components/ContactDetails";
import Profile from "./Components/Profile";
import Invoices from "./Components/Invoices";
import Form from "./Components/Form";
import GetProduct from "./Components/GetProduct";
import OrderManagment from "./containers/Admin/OrderManagment";
import OrderManagmentModal from "./containers/Admin/OrderManagmentModal";
import Orderinvoices from "./containers/Admin/Orderinvoices";
import ProductChart from "./Components/Admin/AdDashProdChart";
import AdDAshboard from "./containers/Admin/AdDashboard";
import Resources from "./Components/Resources";
import Settings from "./Components/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
       

          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/navbar" element={<ProfileNavbar />}></Route>
          <Route path="/invoices" element={<Invoices />}></Route>
          <Route path="/contactdetails" element={<ContactDetails />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/getproduct" element={<GetProduct />}></Route>

          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/orderinvoices" element={<Orderinvoices/>}></Route>

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
          <Route path="/ndatu" element={<NDatu />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/becomeApartner" element={<BecomeAPartner />} />
          <Route path="/productscreen" element={<Productscreen />} />
          <Route path="/nectarcrmreview" element={<NectarCRMReview />} />
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/review" element={<CRMReview />}></Route>
          <Route path="/crm" element={<CRM />} />
          <Route path="/productscreen" element={<Productscreen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/telecomeservices" element={<TelecomeServices />} />
          <Route path="/hostingservices" element={<HostingServices />} />
       
          <Route path="/resources" element={<Resources />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/modal" element={<Modal />} />
          {/*All Tab*/}
          <Route path="/nectarcrmtab" element={<NectarCRMtabs />} />
          <Route path="/nectarhrmstab" element={<NectarHRMStab />} />
          <Route
            path="/nectarcrmgpstracertab"
            element={<NectarGPSTracertab />}
          />
          <Route path="/nerrotractab" element={<NerroTractab />}></Route>
          <Route path="/itsmtooltab" element={<ITSMTooltab />}></Route>
          <Route path="/ndatutab" element={<NDatutab />}></Route>

          {/* Routes of partner */}
          <Route path="partner" element={<PartnerLanding />}>
            <Route path="" element={<PartnerDashboard />} />
          </Route>
          {/* Routes For Admin Part */}
          <Route path="/ordermanagmentmodal" element={<OrderManagmentModal/>} />
          <Route path="/ordermanagment" element={<OrderManagment/>} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdLanding />}>
        
            <Route path="ex" element={<Ex />} />
            <Route path="" element={<AdDAshboard />} />
            <Route path="ex2" element={<Ex/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
