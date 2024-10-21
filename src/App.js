
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Crm from "./pages/CRM/Crm";
import Cma from "./pages/Features/Cma";
import Idx from "./pages/Features/Idx";
import RealEstate from "./pages/Features/RealEstate";
import Marketer from "./pages/Features/Marketer";
import Register from "./pages/Login/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/cma" element={<Cma />} />
        <Route path="/idx-websites" element={<Idx />} />
        <Route path="/real-estate-leads" element={<RealEstate />} />
        <Route path="/marketer" element={<Marketer />} />
      </Routes>
    </>
  );
};

export default App;