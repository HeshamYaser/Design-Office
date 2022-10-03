import React , {Component} from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projescts"
// import Body from "./Components/Body/Body";
// import Services from "./Components/Services/Services";
// import Work from "./Components/Work/Work";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";


class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path="/Projects" element={<Projects />} />
        </Routes>
        {/* <Footer />  */}
      </BrowserRouter>
    )
  }
}

export default App ;

