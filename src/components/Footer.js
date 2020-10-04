import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends React.Component {
  render() {

    return (
      <div>
        <div  className="footer">
          <div
            className="container mt3"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottom: 'solid 1px black'
            }}
          >
            <div className="logo">
              <img src="assets/suyamheaderlogo.jpg" />
            </div>
            <div>
              <ul className="footer-list">
                <li>
                  <Link class="text-dark" to="/Home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link class="text-dark" to="/Institute">
                    The Institute
                  </Link>
                </li>
                <li>
                  <Link class="text-dark" to="/Glory">
                    The Glory
                  </Link>
                </li>
                <li>
                  <Link class="text-dark" to="/Courses">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link class="text-dark" to="/Registration">
                    Registration
                  </Link>
                </li>
                <li>
                  <Link class="text-dark" to="/Payment">
                    Payment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 style={{ fontWeight: `700` }}>Contact Us</h2>
              <p style={{ fontWeight: `500` }}>
                if you have a question or just want to contact us write to
              </p>
              <h4 className="mail">suyamias@gmail.com</h4><br />
              <p style={{ fontWeight: `500` }}> Call us</p>
              <h4 className="mail"><span style={{color:`#0a79df`}}>+91-9486204334</span></h4>
            </div>
          </div>
        </div>
        <div style={{display: `flex`, alignItems: `center`, justifyContent:`space-between`, marginLeft: `200px`, marginRight: `200px`}}>
          <p>Web Design by <a href='https://instagram.com/havi.design?igshid=1rfkbcjw6jjkk'>@havi.design</a></p>
          <p>Web Developing by <a href='https://instagram.com/hexagontech.dev?igshid=9uozxhcarc98'>@hexagontech.dev</a></p>
        </div>
      </div>
    );
  }
}
