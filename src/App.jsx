import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import Members from "./components/Members/Members";
import SideMenuBar from "./components/SideMenuBar";
import Login from "./components/login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state

  useEffect(() => {
    // Check if user is logged in (you can check session, localStorage, etc.)
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true); // Set logged in if token is available
    } else {
      setIsLoggedIn(false); // Set logged in if token is available
    }
  }, []);

  // A component to handle location and active window
  const AppWithLocation = () => {
    const location = useLocation();
    const [activeWin, setActiveWin] = useState(location.pathname);

    useEffect(() => {
      setActiveWin(location.pathname);
    }, [location]);

    return (
      <div>
        {/* Conditionally render the SideMenuBar based on the route */}
        {activeWin !== "/login" && <SideMenuBar />}

        <Routes>
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/members"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Members />
              </ProtectedRoute>
            }
          />

          {/* Public Routes */}
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />} // Pass onLogin prop
          />
        </Routes>
      </div>
    );
  };

  return (
    <Router>
      <AppWithLocation />
    </Router>
  );
};

// ProtectedRoute component to restrict access
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default App;
