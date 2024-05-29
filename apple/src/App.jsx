import React from "react";
import Home from "../src/pages/Home/Home";
import "../public/resource/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mac from "./pages/Mac/Mac";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<Mac />} />
      </Routes>
    </Router>
  );
}

export default App;
