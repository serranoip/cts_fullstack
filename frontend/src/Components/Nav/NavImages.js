import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <img className="logo" src="/ctslogo.png" width={180} height={180} alt="logo"/>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>

        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links">
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
              >
                Home
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/telemetry"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                
                Telemetry
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/commands"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                Commands
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
          <div className="nav-footer">
            <div
              className="location"
              style={{
                bottom: navOpen ? "0" : "-20px",
                opacity: navOpen ? "1" : "0",
                transitionDelay: navOpen ? "1.2s" : "0s",
              }}
            >
              <span>University of Calgary, AB</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a
                    href="https://www.calgarytospace.ca/"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.3s" : "0s",
                    }}
                  >
                    CTS Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.calgarytospace.ca/contact-us"
                    style={{
                      bottom: navOpen ? "0" : "-20px",
                      opacity: navOpen ? "1" : "0",
                      transitionDelay: navOpen ? "1.4s" : "0s",
                    }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
