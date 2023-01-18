import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Logistics from "./pages/Logistics";
import Services from "./pages/Services";
import Supplying from "./pages/Supplying";
import "./styles/Flexbox.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index exact="true" element={<Home />}></Route>
        <Route path="/business" exact="true" element={<Business />}></Route>
        <Route path="/contact" exact="true" element={<Contact />}></Route>
        <Route path="/logistics" exact="true" element={<Logistics />}></Route>
        <Route path="/services" exact="true" element={<Services />}></Route>
        <Route path="/supplying" exact="true" element={<Supplying />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
