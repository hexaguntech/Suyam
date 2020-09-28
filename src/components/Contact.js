import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
  render() {
    return <div>
      <section className="contacth">
          <div className="htext">
            <h1><span style={{color: `#0A79DF`, paddingLeft: `70px`,fontWeight:`700`}}>CONTACT US</span><br /><span style={{fontSize: `small`,paddingLeft:`75px`}}><b>and we will get back to you!</b></span></h1>
          </div>
          <div style={{paddingLeft: `300px`}}>
            <img 
            style={{height: `250px`, width:`300px`}} src="assets/contactus.png"/>
          </div>
      </section>
      <div className="crow1">
          <div style={{borderRight: `1px solid black`, paddingRight:`50px`}}>
            <img className="cimage" src="assets/mail.png" alt="mail-logo"/>
            <p>Mail</p>
            <b><span style={{color: `#0A79DF`}}>suyamias@gmail.com</span></b>
          </div>
          <div style={{borderRight: `1px solid black`, paddingRight:`50px`}}> 
            <img className="cimage" src="assets/telegram.png" alt="telegram-logo"/>
            <p>Telegram</p>
            <b><span style={{color: `#0A79DF`}}>+91-9486204334</span></b>
          </div>
          <div style={{borderRight: `1px solid black`, paddingRight:`50px`}}>
            <img className="cimage" src="assets/whatsapp.png" alt="whatsapp-logo"/>
            <p>Whatsapp</p>
            <b><span style={{color: `#0A79DF`}}>+91-9486334648</span></b>
          </div>
          <div>
            <img className="cimage" src="assets/phone.png" alt="phone-logo"/>
            <p>Phone</p>
            <b><span style={{color: `#0A79DF`}}>0413-2204334</span></b>
          </div>
        </div>
        <div className="crow2">
          <h1 style={{fontWeight: `700`}}>LOCATION</h1>
        </div>
        <div>
          <img style={{width:`100%`}} src="assets/map.png" alt="map"/>
        </div>
        <div className="crow3">
          <h3 className="line">OUR ADDRESS</h3>
        </div>
        <div className="crow4">
          <h4><span style={{color: `#0A79DF`,fontWeight:`700`}}>"Thirukudil"<br />14, First cross<br />Natesan Nagar - East<br />Puducherry – 605 005.</span></h4>
        </div>
    </div>;
  }
}
