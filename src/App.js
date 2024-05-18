import logo from "./logo.svg";
import "./App.css";
import PreSale from "./Pages/PreSale";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PrivacyPolicyPage from "./Pages/privacypolicy";
import HomePage from "./Pages/Homepage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router> {/* Wrap everything in a Router component */}
      <>
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
            </>
          } />
          <Route path="/presalepage" element={<PreSale />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
