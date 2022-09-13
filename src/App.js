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
import CRM from "./Components/CRM";
import NectarCRMtabs from "./containers/NectarCRMtabs";
import PricingSubDownCard from "./containers/PricingSubDownCard";





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
          <Route path="/productscreen" element={<Productscreen />} />

          <Route path="nectarCRM" element={<NectarCRMtabs />} />
          <Route path="/nectarcrmreview" element={<NectarCRMReview />} />

          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/review" element={<CRMReview />}></Route>
          <Route path="/pricing" element={<PricingSubDownCard />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
