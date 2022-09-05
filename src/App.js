import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./containers/landingpage";
// import LoginPage from "./containers/LoginPage";
import BecomeAPartner from "./Components/Header/BecomeAPartner";
import NectarCRM from "./Components/NectarCRM";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/becomeApartner" element={<BecomeAPartner />} />
          <Route path="/nectarcrm" element={ <NectarCRM
          title="Nectar CRM"
          subtext1="The easy to use and customizable CRM for your Marketing, Sales, & Customer Service Teams."
          subtext2="Better Sales Performance Increased Profitability & Efficiency CRM Improves Your Customer Service"
          heading="Get 2 months Free Subscription"
          buttontext="Free Demo"
          buttontext2="Buy Now"
          />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
