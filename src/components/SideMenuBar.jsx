import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideMenuBar.css";

const SideMenuBar = () => {
  const location = useLocation();

  // Set the initial active window based on the current path
  const [activeWin, setActiveWin] = useState(location.pathname);
  const [toggleShow, setToggleShow] = useState("show");
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);

  // Update activeWin when the location changes
  useEffect(() => {
    setActiveWin(location.pathname);
  }, [location]);

  // Handle sidebar toggle
  const handleToggle = () => {
    setToggleShow((prevToggleShow) =>
      prevToggleShow === "show" ? "hide" : "show"
    );
  };

  // Handle search button toggle for small screens
  const handleSearchButtonClick = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setIsSearchFormVisible(!isSearchFormVisible);
    }
  };

  // Handle window resize for hiding/showing sidebar or search form
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setToggleShow("hide");
      } else if (window.innerWidth > 576) {
        setIsSearchFormVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section id="sidebar" className={`${toggleShow}`}>
        <Link to="/" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">AdminHub</span>
        </Link>

        <ul className="side-menu top">
          <li className={activeWin === "/" ? "active" : ""}>
            <Link to="/">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li className={activeWin === "/products" ? "active" : ""}>
            <Link to="/products">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="text">Products</span>
            </Link>
          </li>
          <li className={activeWin === "/members" ? "active" : ""}>
            <Link to="/members">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Members</span>
            </Link>
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
            <Link to="/login" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <i className="bx bx-menu" onClick={handleToggle}></i>

          <div>
            <a href="#" className="notification">
              <i className="bx bxs-bell"></i>
              <span className="num">8</span>
            </a>
            <a href="#" className="profile">
              <img src="img/people.png" alt="Profile" />
            </a>
          </div>
        </nav>
      </section>
    </>
  );
};

export default SideMenuBar;
