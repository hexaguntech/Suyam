import React from 'react';
import './Payment.css';

export default class Payment extends React.Component {
  render() {
    return <div style={{marginBottom:`200px`}}>
      <div className="proverb">
          <p style={{textAlign:`center`,padding:`20px`}}>கேடுஇல் விழுச்செல்வம் கல்வி ஒருவற்கு <br/>மாடுஅல்ல மற்ற யவை. 	</p>
        </div>
      <div className="paymenth">
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
                  PAYMENT DETAILS
                </span>
              </h1>
              <div>
                <img style={{ height: `250px` }} src="assets/paymentvector.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt3" style={{fontWeight:`500`,marginBottom:`30px`,marginTop:`30px`}} >
          <p>Kindly pay the fees for the course concerned into the following Bank Account.</p><br/><br />
          <i>Bank Account Details :</i><br/><br/>
          <p style={{color: `#0A79DF`}} >Name of the Account Holder : KOPPEROUNDEVI<br/>
          Account Number : 76720100001634<br/>
          Bank Name : Bank of Baroda<br/>
          IFSC Code : BARB0VJPOND<br/>
          MICR Code : 605012008<br/>
          </p><br/><br />
          <p>
            Please send payment details / screenshot of payment transaction along with your name,<br/> mobile number and the 
            course applied for through the following modes:
          </p><br/>
          <p><b>Email</b><br />
          <div className="p__list">
            <ul>
              <li>
                <span>coursefee@suyamias.com</span>
              </li>
              <li>
                <span>suyamias@gmail.com</span>
              </li>
            </ul>
          </div>
          </p>
          <p><b>Whatsapp</b>
            <div className="p__list">
              <ul>
                <li>
                  <span>9486204334</span>
                </li>
              </ul>
            </div>
          </p><br/>
          <p>
            Fee Payment in cash may also be made in person by visiting the Institute’s office at
            <br/><br/> 
          </p>
          <b style={{color:`#0A79DF`}}>
            ADDRESS:<br/><br/> 
            14, First Cross,<br/>
            Natesan Nagar – East,<br/>
            Puducherry – 605 005.<br/>
            Timing : 11 a.m. to 4 p.m. (Monday to Saturday)<br/>
          </b><br/><br/>
          <p><b>NOTE:</b>
          <div className="p__list">
            <ul>
              <li><span>Login ID and Password for “SUYAM I.A.S.” Mobile App, through which the course is conducted,
              will be sent through <br />SMS / e-mail only after Registration and payment of Fees.</span></li>
              <li><span>Fees once paid is non-refundable and non-transferable.</span></li>
            </ul>
          </div>
          </p>
        </div>
    </div>;
  }
}
