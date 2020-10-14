import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer scl">
          <div className="container mt3 scl">
            <div className="logo" style={{display:`flex`,alignItems:`center`}}>
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
            <div
              style={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                flexDirection: `column`,
              }}
            >
              <h3 style={{ fontWeight: `700` }}>Contact Us</h3>
              <p
                style={{
                  fontWeight: `500`,
                  textAlign: 'center',
                  marginBottom: `0px`,
                }}
              >
                if you have a question or just want to contact us,
                <br /> write to
              </p>

              <h4 className="mail">support@suyamias.com</h4>
              <h4 className="mail">suyamias@gmail.com</h4>
              <p style={{ fontWeight: `500`, marginBottom: `0px` }}> Call us</p>
              <h4 className="mail">
                <span style={{ color: `#0a79df` }}>+91-9486204334</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="socialfot">
          <p>
            Web Design by{' '}
            <a href="https://instagram.com/havi.design?igshid=1rfkbcjw6jjkk">
              @havi.design
            </a>
          </p>
          <p>
            Web Developing by{' '}
            <a href="https://instagram.com/hexagontech.dev?igshid=9uozxhcarc98">
              @hexagontech.dev
            </a>
          </p>
        </div>
      </div>
    );
  }
}
