import "./styling/Navbar/navbar.scss"
import "./styling/Navbar/navbar.css"

import Countdown from "../Countdown/Countdown";
import Time from "../Countdown/Time";

import { useState} from "react"
import { Link } from "react-router-dom";
import  Select  from 'react-select';

const options = [
  { value: 'chocolate', label: 'oct19_data.csv' },
  { value: 'strawberry', label: 'oct20_data.csv' },
  { value: 'vanilla', label: 'oct21_data.csv' },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);



  return (
    <div className="navb">
      <div className="wrapper">
        <div className="items" style={{
          opacity: navOpen ? 0 : 1,
          transition: "opacity 0.3s ease-in",
        }}>
          <div className="item">
            <span className="vitals">
              CURRENT TIME:
            </span>
            <span className="vitals">
              <Time/>
            </span>
          </div>
          <div className="item">
            <span className="vitals">
              TIME UNTIL NEXT PASS:
            </span>
            <span className="vitals">
              <Countdown/>
            </span>
          </div>
          <div className="item">
            <span className="vitals">
              ESTIMATED LOCATION:
            </span>
            <span className="vitals">
              Calgary, AB
            </span>
          </div>         
        </div>
        <div className="select">
            <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="select-box"
            placeholder="Select data"
            />
        </div>
        <div className="menu">
            <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
              <div className={navOpen ? "hamBoxTop hamBoxTopOpen" : "hamBoxTop"}>
                  <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                  <span
                    className={navOpen ? "lineBottom spin" : "lineBottom"}
                  ></span>
              </div>
            </div>
            <div
              className="nav-overlayTop"
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
                    to="/images"
                    onClick={() => setNavOpen(!navOpen)}
                    style={{
                      top: navOpen ? "0" : "120px",
                      transitionDelay: navOpen ? "1s" : "0s",
                    }}
                  >
                    Images
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
    </div>
  );
};

export default Navbar;
