import React from "react";
import logo from "../../assets/images/housivity-orange-blue-logo.svg";
import heartLogo from "../../assets/images/filled-heart.svg";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-navbar">
        <nav>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="House Logo" />
            </a>
            <ul className="nav-list">
              <li className="nav-item investore-item">
                <a className="investore">
                  <div>Investore</div>
                  <div className="newBtn">New</div>
                </a>
              </li>
              <li className="nav-item border"></li>
              <li className="nav-item">
                <button
                  className="saved-button"
                  onClick={() => navigate("/saved-cards")}
                >
                  <img src={heartLogo} alt="heartLogo" />
                  Saved
                </button>
              </li>
              <li className="nav-item">
                <button className="text-button">A</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
