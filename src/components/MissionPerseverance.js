import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MissionPerseverance.css';

export default class MissionPerseverance extends React.Component {
  render() {
    return (
      <div

        style={{
          textAlign: `justify`,
          paddingTop: `20px`,
          flexDirection: 'column',
        }}
        className="container mt3"
      >
        <h1 style={{ color: `#0a79df`, fontWeight: `500` }}>
          MISSION PERSEVERANCE 2020
        </h1>
        <br />
        <p><b>Special preparatory course</b> through</p>
        <img
          style={{ height: `100px`, width: `100px`, padding: `20px` }}
          src="assets/suyamapplogo.png"
          alt="suyamapplogo"
        />
        <p>
          <p><b  style={{ color: `#0a79df` }}>Suyam IAS</b> Mobile App</p>
        </p>
        <p>New Batch commences soon...Date will be announced shortly</p>
        <br />
      

        <p style={{ textAlign: `justify` }}>
          {' '}
          This Special Preparatory Course is a mission to keep the persevering
          Government service aspirants equipped to crack any recruitment exams
          like UDC, LDC, VAO, VA, SI and DT in Puducherry Government as well as
          TNPSC, SSC, RRB and such other exams that are anticipated in the near
          or foreseeable future.
        </p>
        <p>
          The following subjects will be taught by way of a range of
          pre-recorded video classes, learning materials and online tests
          through <b>“Suyam IAS” </b>Mobile App :
        </p>
        <div className="mp__list">
          <ul>
            <li>
              <span>General English</span>
            </li>
            <li>
              <span>General Science</span>
            </li>
            <li>
              <span>Indian Constitution</span>
            </li>
            <li>
              <span>General Knowledge</span>
            </li>
            <li>
              <span>Geography of the World and India</span>
            </li>
         
            <li>
              <span>Quantitative Aptitude</span>
            </li>
            <li>
              <span>Indian Economy</span>
            </li>
            <li>
              <span>Indian History</span>
            </li>
            <li>
              <span>Current Affairs</span>
            </li>
            <li style={{ listStyle: `none` }}>
              <br />
            </li>
          </ul>
        </div>
      
        <div className="mp__list2">
          <p>
            Teaching will be imparted in Tamil while the board works/texts will
            be in English for the ease of Puducherry and Tamil Nadu aspirants.
            <br />
            <br />
            You can find in <b>“Suyam IAS”</b> Mobile App, the following learning
            tools —{' '}
          </p>
          <ul>
            <li>
              <span>
              <b  style={{ color: `#0a79df` }}>Well delivered VIDEO CLASSES</b> – Dedicated faculty of the
            institute give importance to Conceptual clarity and innovative
            delivery of subjects.
              </span>
            </li>
            
            <li>
              <span>
              <b  style={{ color: `#0a79df` }}>Meticulously crafted E-NOTES</b> – Current affairs will be
            updated on weekly basis and General Knowledge and other materials
            considered to be helpful will be provided.
              </span>
            </li>
            
            <li>
              <span>
              <b  style={{ color: `#0a79df` }}>Carefully prepared DAILY TESTS and WEEKLY TESTS</b> – This most
            powerful online assessment tool gives you an exceptional and
            seamless online exam experience through Daily Tests and Weekly Tests
            based on the subjects covered, regularly.
              </span>
            </li>
            
          </ul>
        </div>
        <p>
          Register here to avail the benefits of <b>Mission Perseverance 2020, </b>
          Special Preparatory Course through <b>“Suyam IAS”</b> Mobile App.
        </p>
        <br />
        <h4>
          Course Fee : <b style={{ color: `#0a79df` , fontWeight: `500`  }}>Rs.7500</b>
        </h4>
        <div className="mp__footer">
          <div className="mp__reg">
            <Link to="/Register">
              <Button className="btn btn-default" type="link">
                REGISTER NOW
              </Button>
            </Link>
          </div>
          <div>
            <img
              src="assets/mpvector.png"
              alt="mpvector"
              className="mp__vector"
            />
          </div>
        </div>
      </div>
    );
  }
}
