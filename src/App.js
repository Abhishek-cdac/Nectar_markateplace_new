import logo from "./logo.svg";
import "./App.css";
import Example from "./example";
import Header from "./Components/Header/Header";
import Header2 from "./Components/Header/Header2";
import Landingpage from "./containers/landingpage";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <Header/>
        <Example />
        <Header2/> */}
     <Landingpage/>
      {/* </header> */}
    </div>
  );
}

export default App;
