/* eslint-disable */

import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import calculate from "./logic/calculate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div className="components">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
