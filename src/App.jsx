import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import Members from "./components/Members/Members";
import SideMenuBar from "./components/SideMenuBar";
import Login from "./components/login";

function App() {
  return (
    <div>
      {/* Wrapping the entire app in BrowserRouter */}
      <Router>
        {/* Render SideMenuBar */}
        <SideMenuBar />
        {/* Define routes using Routes and Route */}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/members" element={<Members />} />
          <Route path="/" element={<Dashboard />} /> {/* Default Route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
