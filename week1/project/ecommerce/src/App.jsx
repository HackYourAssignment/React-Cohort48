// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comps/Navbar";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import MensClothing from "./pages/MensClothing";
import WomensClothing from "./pages/WomensClothing";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/man" element={<MensClothing />} />
        <Route path="/womans" element={<WomensClothing />} />
      </Routes>
    </Router>
  );
};

export default App;
