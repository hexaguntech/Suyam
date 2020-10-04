import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div>
          <div className="logo">
            <img src="assets/suyamheaderlogo.jpg" />
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
                  <span className="text-light" style={{ fontWeight: `700` }}>
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Institute'} className="nav-link">
                  <span className="text-light" style={{ fontWeight: `700` }}>
                    The Institute
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Glory'} className="nav-link">
                  <span className="text-light" style={{ fontWeight: `700` }}>
                    The Glory
                  </span>
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
                      <span
                        className="text-light"
                        style={{ fontWeight: `400` }}
                      >
                        Mission Perseverance 2020
                      </span>
                    </Link>
                    <Link
                      to={'/OperationRedKEPI2020'}
                      className="nav-link drophover"
                    >
                      <span
                        className="text-light"
                        style={{ fontWeight: `400` }}
                      >
                        Operation Red Kepi 2020
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to={'/Register'} className="nav-link">
                  <span className="text-light" style={{ fontWeight: `700` }}>
                    Registration
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Payment'} className="nav-link">
                  <span className="text-light" style={{ fontWeight: `700` }}>
                    Payment
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Contactus'} className="nav-link">
                  <span className="text-light" style={{ fontWeight: `700` }}>
                    Contact us
                  </span>
                </Link>
              </li>
            </div>
          </nav>
          <div className="announcement">
            <marquee style={{ fontWeight: `400` }}>
            Special Online Preparatory Course for Competitive Exams in Puducherry Government as well as TNPSC,
            SSC, RRB and such other exams through “SUYAM I.A.S.” Mobile App commences on October 15,2020.
            Register immediately.
            </marquee>
          </div>
        </div>
      </div>
    );
  }
}
