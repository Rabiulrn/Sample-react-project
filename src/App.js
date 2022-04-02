import { BrowserRouter as Router, Route, Routes } from "react-router-dom";   
import './App.css';
import Home from './components/Home/Home';
import LogIn from "./components/LogIn/LogIn";
import OurProduct from "./components/OurProduct/OurProduct";
import Pricing from "./components/Pricing/Pricing";
import SignUp from "./components/SignUp/SignUp";
import Support from "./components/Support/Support";

function App() {
  return (
    <Router>

      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Home" element={<Home/>}/>
      <Route exact path="/OurProduct" element={<OurProduct/>}/>
      <Route exact path="/Pricing" element={<Pricing/>}/>
      <Route exact path="/Support" element={<Support/>}/>
      <Route exact path="/SignUp" element={<SignUp/>}/>
      <Route exact path="/LogIn" element={<LogIn/>}/>
      <Route exact path="*" element={<Home/>}/>
        {/* <Route exact path="/OurProduct">
          <OurProduct />
        </Route> */}
        {/* <Route exact path="/Pricing">
          <Users />
        </Route> */}
        {/* <Route exact path="/Support">
          <Home />
        </Route>
        <Route exact path="/LogIn">
          <Home />
        </Route>
        <Route exact path="/SignUp">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="*">
          <Home />
        </Route> */}
      </Routes>

    </Router>

  );
}

export default App;
