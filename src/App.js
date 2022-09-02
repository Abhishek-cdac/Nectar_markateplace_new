import logo from "./logo.svg";
import "./App.css";
import Example from "./example";
import Header from "./Components/Header/Header";
import Header2 from "./Components/Header/Header2";
import Landingpage from "./containers/landingpage";
import ReviewForm from "./Components/ReviewForm";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
         {/* <Header/> */}
        {/* <Example />
        <Header2/> */} 
      <Landingpage/>
   
      {/* </header> */}
      {/* <Footer/> */}
      {/* <ReviewForm /> */}

    </div>
  );
}

export default App;
