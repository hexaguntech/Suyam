import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './Head2.css';
import NavBar from './NavBar';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div>
          <div className="logo">
            <img src="assets/suyamheaderlogo.jpg" />
          </div>

          <Navbar expand="lg" collapseOnSelect="true">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="mr-auto custnav mx-auto"
                style={{
                  justifyContent: 'space-evenly',
                }}
              >
                <Nav.Link href="/Home">
                  <span className="text-light" style={{ fontWeight: `700` }}>
                    Home
                  </span>
                </Nav.Link>
                <Nav.Link href="/Institute">
                  <span
                    className="text-light"
                    style={{
                      fontWeight: `700`,
                    }}
                  >
                    The Institute
                  </span>
                </Nav.Link>
                <Nav.Link href="/Glory">
                  <span
                    className="text-light"
                    style={{
                      fontWeight: `700`,
                    }}
                  >
                    Glory
                  </span>
                </Nav.Link>

                <NavDropdown
                  title="Courses"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: `0px` }}
                >
                  <NavDropdown.Item href="/Missionperseverance2020">
                    Mission Perseverance 2020
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/OperationRedKEPI2020">
                    Operation Red Kepi 2020
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Register">
                  <span
                    className="text-light"
                    style={{
                      fontWeight: `700`,
                    }}
                  >
                    Register
                  </span>
                </Nav.Link>

                <Nav.Link href="/Payment">
                  <span
                    className="text-light"
                    style={{
                      fontWeight: `700`,
                    }}
                  >
                    Payment
                  </span>
                </Nav.Link>
                <Nav.Link href="/Contactus">
                  <span
                    className="text-light"
                    style={{
                      fontWeight: `700`,
                    }}
                  >
                    Contact Us
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="announcement">
            <marquee style={{ fontWeight: `400` }}>
              Special Online Preparatory Course for Competitive Exams in
              Puducherry Government as well as TNPSC, SSC, RRB and such other
              exams through “SUYAM I.A.S.” Mobile App commences on October
              15,2020. Register immediately.
            </marquee>
          </div>
        </div>
      </div>
    );
  }
}
