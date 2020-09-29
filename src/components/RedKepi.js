import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RedKepi.css';

export default class RedKepi extends React.Component {
    render() {
      return <div className="redkepi">
        <h1 style={{color: `#0a79df`, fontWeight: `700`}}>OPERATION RED KEPI</h1>
        <p><b>Online Video Classes</b></p>
        <p>Special preparatory course through</p>
        <img style={{height: `100px`, width: `100px`, padding: `20px`}}src="assets/suyamapplogo.png" alt="suyamapplogo"/>
        <p><b style={{color: `#0a79df`}}>SUYAM IAS APP</b> App</p>
        <strong>New Batch commences on October 2, 2020</strong><br /><br />
        <p>This Special Preparatory Course is a mission to keep the persevering Government service aspirants equipped to crack any recruitment exams like UDC, LDC, VAO, VA, SI and DT in Puducherry Government as well as TNPSC, SSC, RRB and such other exams that are anticipated in the near or foreseeable future.</p>
        <p><b>The following subjects will be taught by way of a range of pre-recorded video classes, learning materials and online tests through “SUYAM I.A.S.” App :</b></p>
        <h5><b>PART-I</b></h5> 
        <div className="rk__table1">
          <table>
            <tr>
              <th>Subject</th>
              <th>Maximum Marks</th>
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
              <td><b>Total Marks</b></td>
              <td><b>100</b></td>
            </tr>
          </table>
          &nbsp;
        </div>
        <div className="rk__table1">
          <h5><b>PART-II</b></h5> 
          <table>
            <tr>
              <th>Subject</th>
              <th>Maximum Marks</th>
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
              <td><b>Total Marks</b></td>
              <td><b>100</b></td>
            </tr>
          </table>
          &nbsp;
        </div>
        <div>
          <hr/>
          <p>The above subjects will be taught by way of a range of pre-recorded video classes, learning materials and online tests through “SUYAM I.A.S.” App.</p>
          <p>Teaching, board works, text materials and test papers will be bilingual, ie., both in Tamil and English for the ease of Puducherry aspirants.</p>
          <p>You can find in “SUYAM I.A.S.” Mobile App —
          <br/>
          <b>Well delivered VIDEO CLASSES</b> – Dedicated faculty of the institute give importance to Conceptual clarity and innovative delivery of subjects.
          <br/>
          <b>Meticulously crafted E-NOTES</b> – Current affairs will be updated on weekly basis and General Knowledge and other materials considered to be helpful will be provided.
          <br/>
          <b>Carefully prepared DAILY TESTS and WEEKLY TESTS</b> – This most powerful online assessment tool gives you an exceptional and seamless online exam experience through Daily Tests and Weekly Tests based on the subjects covered, regularly.</p>
          <br/>
          &nbsp;
          <hr/>
        </div>
        <p>Register here to avail the benefits of Mission Perseverance 2020, Special Preparatory Course through “SUYAM I.A.S.” Mobile App.</p><br />
        <h4><b>Course Fee : Rs.7500</b></h4>
        <div className="rk__footer">
          <div className="rk__reg">
            <Link to="/Register">
              <Button className="btn btn-default" type="link">REGISTER NOW</Button>
            </Link>
          </div>
          <div><img src="assets/rkvector.png" alt="rkvector" className="rk__vector"/></div>
        </div>
      </div>;
    }
  }