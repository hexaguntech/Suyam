import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './NavBar.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.classToggle = this.classToggle.bind(this);
  }

  classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items');

    navs.forEach((nav) => nav.classList.toggle('Navbar__ToggleShow'));
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div role="navigation">
            <div class="container">
              <div class="navbar-header">
                <button
                  class="navbar-toggle"
                  type="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a href="#" class="navbar-brand">
                  GeeksforGeeks
                </a>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                  <li class="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    {' '}
                    <a href="#">About</a>{' '}
                  </li>
                  <li>
                    <a href="#">Contact</a>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
