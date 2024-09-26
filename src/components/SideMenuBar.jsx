import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import "./SideMenuBar.css";
import { useLocation } from "react-router-dom";

const SideMenuBar = () => {
  const location = useLocation();

  // Set the initial active window based on the current path
  const [activeWin, setActiveWin] = useState(location.pathname);

  // Update activeWin when the location changes
  useEffect(() => {
    setActiveWin(location.pathname);
  }, [location]);

  return (
    <>
      <NavBar />
      <section id="sidebar">
        <a href="/" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">AdminHub</span>
        </a>

        <ul className="side-menu top">
          <li className={activeWin === "/dashboard" ? "active" : ""}>
            <a href="/dashboard">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li className={activeWin === "/products" ? "active" : ""}>
            <a href="/products">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="text">Products</span>
            </a>
          </li>
          <li className={activeWin === "/members" ? "active" : ""}>
            <a href="/members">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Members</span>
            </a>
          </li>
        </ul>

        <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-cog"></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="/login" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SideMenuBar;
