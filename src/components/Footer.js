import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return <div className="footer">
         <div className="logo">
            <img src="assets/suyam_header_logo-02.png" />
        </div>
        <div>
            <ul className="footer-list">
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Institute">The Institute</Link></li>
                <li><Link to="/Glory">The Glory</Link></li>
                <li><Link to="/Courses">Courses</Link></li>
                <li><Link to="/Registration">Registration</Link></li>
                <li><Link to="/Payment">Payment</Link></li>
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
