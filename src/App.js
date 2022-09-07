import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./containers/landingpage";
import LoginPage from "./containers/LoginPage";
import BecomeAPartner from "./Components/Header/BecomeAPartner";
import NectarCRMtabs from "./containers/NectarCRMtabs";
import NectarCRMoverview from "./containers/NectarCRMoverview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/becomeApartner" element={<BecomeAPartner />} />
          <Route path="/nectarCRM"  element={<NectarCRMtabs  />} />
       
                   </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
