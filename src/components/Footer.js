import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return <div className="footer">
         <div className="logo">
            <img style={{backgroundColor: `white`, borderRadius: `20px`}} src="assets/suyam_header_logo-02.png" />
        </div>
        <div>
            <ul className="footer-list">
                <li><Link className="text-light"to="/Home">Home</Link></li>
                <li><Link className="text-light" to="/Institute">The Institute</Link></li>
                <li><Link className="text-light" to="/Glory">The Glory</Link></li>
                <li><Link className="text-light" to="/Courses">Courses</Link></li>
                <li><Link className="text-light" to="/Registration">Registration</Link></li>
                <li><Link className="text-light" to="/Payment">Payment</Link></li>
            </ul>
        </div>
        <div>
            <h2>Contact Us</h2>
            <p>if you have a question or just want to contact us write to</p>
            <h4 className="mail">suyamias@gmail.com</h4>
        </div>
    </div>;
  }
}
