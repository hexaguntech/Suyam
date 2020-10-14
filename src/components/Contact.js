import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="proverb">
          <p>
            எப்பொருள் யார்யார்வாய்க் கேட்பினும் அப்பொருள் <br />
            மெய்ப்பொருள் காண்பது அறிவு.
            <br />
            <p style={{ float: `right`, fontStyle: 'italic' }}> ... குறள்</p>
          </p>

        </div>
        <div className="contacth">
          <div className="container mt3">
            <div className="htex">
              <h1>
                <span
                  style={{
                    color: `#0A79DF`,
                    fontWeight: `700`,
                    fontSize: `55px`,
                  }}
                >
                  CONTACT US
                </span>
                <br />
                <span
                  style={{
                    fontSize: `small`,
                    fontWeight: `400`,
                    fontSize: `18px`,
                    color: `#666666`,
                  }}
                >
                  <b>And we will get back to you!</b>
                </span>
              </h1>

              <div>
                <img style={{ height: `350px` }} src="assets/contactus.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt3">
          <div className="crow1">
            <div
              className="socialbtn"
              // style={{
              //   display: 'flex',
              //   borderRight: `1px solid black`,
              //   paddingRight: `50px`,
              //   flexDirection: 'column',
              //   alignItems: 'center',
              // }}
            >
              <img className="cimage" src="assets/mail.png" alt="mail-logo" />
              <p>Mail</p>
              <b>
                <span style={{ color: `#0A79DF` }}>suyamias@gmail.com</span>
              </b>
            </div>
            <div className="vl"></div>

            <div
              // style={{ borderRight: `1px solid black`, paddingRight: `50px` }}
              className="socialbtn"
            >
              <img
                className="cimage"
                src="assets/telegram.png"
                alt="telegram-logo"
              />
              <p>Telegram</p>
              <b>
                <span style={{ color: `#0A79DF` }}>+91-9486204334</span>
              </b>
            </div>
            {/* <hr width="1" size="500" style={{ color: `#0A79DF` }}></hr> */}
            <div className="vl"></div>
            <div
              // style={{ borderRight: `1px solid black`, paddingRight: `50px` }}
              className="socialbtn"
            >
              <img
                className="cimage"
                src="assets/whatsapp.png"
                alt="whatsapp-logo"
              />
              <p>Whatsapp</p>
              <b>
                <span style={{ color: `#0A79DF` }}>+91-9486334648</span>
              </b>
            </div>
            <div className="vl"></div>

            <div className="socialbtn">
              <img className="cimage" src="assets/phone.png" alt="phone-logo" />
              <p>Phone</p>
              <b>
                <span style={{ color: `#0A79DF` }}>0413-2204334</span>
              </b>
            </div>
          </div>
        </div>

        <div className="crow2">
          <h1 style={{ fontWeight: `600` }}>LOCATION</h1>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6254565494983!2d79.80579931478216!3d11.931132991544413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU1JzUyLjEiTiA3OcKwNDgnMjguOCJF!5e0!3m2!1sen!2sin!4v1601752744830!5m2!1sen!2sin"
          style={{ border: `0`, width: `100%`, height: `450px` }}
          width="600px"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <div className="crow3 container mt3">
          <h3 className="line">OUR ADDRESS</h3>
        </div>
        <div className="crow4 container mt3">
          <h4>
            <span style={{ color: `#0A79DF`, fontWeight: `500` }}>
              "Thirukudil"
              <br />
              14, First cross
              <br />
              Natesan Nagar - East
              <br />
              Puducherry – 605 005.
            </span>
          </h4>
        </div>
      </div>
    );
  }
}
