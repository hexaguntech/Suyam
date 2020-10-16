import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Redkepi.css';

export default class RedKepi extends React.Component {
  render() {
    return (
      
      <div className="container mt3 redkepi">
        <img
          style={{ height: `100px`, width: `100px`, padding: `5px` }}
          src="assets/redkepilogo.png"
          alt="suyamapplogo"
        />
        <h1 style={{ color: `#0a79df`, fontWeight: `500` }}>
          OPERATION RED KEPI 2020
        </h1>
        <p>
          <b>Special Coaching for Police Constable Exam in Puducherry</b> through
        </p>
        
        <img
          style={{ height: `100px`, width: `100px`, padding: `20px` }}
          src="assets/suyamapplogo.png"
          alt="suyamapplogo"
        />
        <p>
        <b  style={{ color: `#0a79df` }}>Suyam IAS</b> Mobile App
        </p>
        <strong>New Batch commences shortly... Date will be announced soon.</strong>
        <br />
        <br />
        <p>
        This Special Coaching Programme aims at grooming aspirants for the the much awaited competitive
        examination for the recruitment of <b>Police Constables</b> in the <b>Government of Puducherry.</b> The objective of
        this Coaching programme is to support the Police aspirants to turn their Khakhi dreams into reality.
        </p>
        <p>As per the recruitment procedure for the posts of Police Constable, all candidates (male or female) who
           qualify the Physical standards and Physical Efficiency tests, shall undergo a Witten test. The questions
           will be of objective type and will be generally of S.S.L.C. Standard. The question paper will be in two
            parts each of two hours duration, consisting of
          </p>
         <br/>
        <h5>
          <b >PART-I</b>
        </h5>
        <div className="rk__table1">
          <table>
            <tr>
              <td><i>Subject</i></td>
              <td><i>Maximum <br/> Marks</i></td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Physical Science</td>
              <td>35</td>
            </tr>
            <tr>
              <td>Biology & Huma Physiology</td>
              <td>35</td>
            </tr>
            <tr>
              <td>
                <b>Total Marks</b>
              </td>
              <td>
                <b>100</b>
              </td>
            </tr>
          </table>
          &nbsp;
        </div>
        <h5>
            <b>PART-II</b>
          </h5>
        <div className="rk__table1">
        
          <table>
          <tr>
              <td><i>Subject</i></td>
              <td><i>Maximum <br/> Marks</i></td>
            </tr>
            <tr>
              <td>History</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Geography</td>
              <td>30</td>
            </tr>
            <tr>
              <td>General Knowledge and Current Events</td>
              <td>40</td>
            </tr>
            <tr>
              <td>
                <b>Total Marks</b>
              </td>
              <td>
                <b>100</b>
              </td>
            </tr>
          </table>
          &nbsp;
        </div>
        <div>
          <hr />
          <p>
            The above subjects will be taught by way of a range of pre-recorded
            video classes, learning materials and online tests through <b>“Suyam
            IAS”</b> App.
          </p>
          <p>
            Teaching, board works, text materials and test papers will be
            bilingual, ie., both in Tamil and English for the ease of Puducherry
            aspirants.
          </p>
          <p>
            You can find in <b>“Suyam IAS”</b> Mobile App —
            <br />
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
          Besides the above learning tools, well edited, exam oriented and bilingual (both in English and Tamil)
          books on the required subjects based on the Tamil Nadu Text Books (6 th to 10 th Standard) will be
          provided.
          </p>
          <br />
          
        </div>
        <p>
          Register here to avail the benefits of <b>Operation Red Kepi 2020, </b>
          Special Coaching for Police Constable Exam in Puducherry through <b>“Suyam IAS”</b> Mobile App.
        </p>
        <br />
        <h4>
        Course Fee : <b style={{ color: `#0a79df` , fontWeight: `500`  }}>Rs.7500</b>
        </h4>
        <div className="rk__footer">
          <div className="rk__reg">
            <Link to="/Register">
              <Button className="btn btn-default" type="link">
                REGISTER NOW
              </Button>
            </Link>
          </div>
          <div>
            <img
              src="assets/rkvector.png"
              alt="rkvector"
              className="rk__vector"
            />
          </div>
        </div>
      </div>
    );
  }
}
