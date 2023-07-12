import "./App.css";
import Navbar from "./containers/Navbar/Navbar";
import SocialMedia from "./containers/SocialMedia/SocialMedia";
import Home from "./containers/Home/Home";
import Influencers from "./containers/Influencers/Influencers";
import About from "./containers/About/About";
import Services from "./containers/Services/Services";
import Contact from "./containers/Contact/Contact";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SocialMedia />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
