import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import Members from "./components/Members/Members";
import SideMenuBar from "./components/SideMenuBar";
import Login from "./components/login";

const App = () => {
  // A component to handle location and active window
  const AppWithLocation = () => {
    const location = useLocation();

    // Set the initial active window based on the current path
    const [activeWin, setActiveWin] = useState(location.pathname);

    // Update activeWin when the location changes
    useEffect(() => {
      setActiveWin(location.pathname);
    }, [location]);

    return (
      <div>
        {/* Conditionally render the SideMenuBar based on the route */}
        {activeWin === "/login" ? null : <SideMenuBar />}
        {/* Define routes using Routes and Route */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/members" element={<Members />} />
          <Route path="/" element={<Dashboard />} /> {/* Default Route */}
        </Routes>
      </div>
    );
  };

  return (
    <Router>
      {/* Wrapping the entire app in Router */}
      <AppWithLocation />
    </Router>
  );
};

export default App;
