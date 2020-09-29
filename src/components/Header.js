import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div>
          <div className="logo">
            <img src="assets/suyam_header_logo-02.png" />
          </div>

          <nav
            className="navbar navbar-expand-sm navbar-inverse bg-inverse m-auto"
            // style={{ display: 'flex', alignItems: 'center' }}
          >
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#Navbar"
            >
              <span class="navbar-toggler-icon text-light">|=|</span>
            </button>
            <div
              className="navbar-nav mr-auto navbar-center collapse navbar-collapse m-auto"
              id="Navbar"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <li className="nav-item">
                <Link to={'/Home'} className="nav-link">
                  <span className="text-light">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Institute'} className="nav-link">
                  <span className="text-light">The Institute</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Glory'} className="nav-link">
                  <span className="text-light">The Glory</span>
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="dropbtn">Courses</button>
                  <div className="dropdown-content">
                    <Link
                      to={'/Missionperseverance2020'}
                      className="nav-link drophover"
                    >
                      <span className="text-light">
                        Mission perseverance 2020
                      </span>
                    </Link>
                    <Link
                      to={'/OperationRedKEPI2020'}
                      className="nav-link drophover"
                    >
                      <span className="text-light">
                        Operation Red KEPI 2020
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to={'/Register'} className="nav-link">
                  <span className="text-light">Registration</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Payment'} className="nav-link">
                  <span className="text-light">Payment</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Contactus'} className="nav-link">
                  <span className="text-light">Contact us</span>
                </Link>
              </li>
            </div>
          </nav>
          <div className="announcement">
            <marquee>
              Online Video Coaching Programme for Competitive Exams in
              Puducherry Government as well as TNPSC, SSC, RRB and such other
              exams commences on August 15,2020. Register Immediately!
            </marquee>
          </div>
          <div className="proverb"></div>
        </div>
      </div>
    );
  }
}
