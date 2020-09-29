import React from 'react';
import './Redkepi.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class RedKepi extends React.Component {
    render() {
     
        return <div style={{textAlign:`justify`}}>
        <h1 style={{color: `#0a79df`, fontWeight: `700`}}>OPERATION RED KEPI</h1><br/>
        <p><b>Online Video Classes</b></p>
        <img style={{height: `100px`, width: `100px`, padding: `20px`}}src="assets/suyamapplogo.png" alt="suyamapplogo"/>
        <p><b style={{color: `#0a79df`}}>SUYAM IAS APP</b> App</p>
        <strong>New Batch commences on October 2, 2020</strong><br/><br/>
        <p>This Special Preparatory Course is a mission to keep the persevering Government service aspirants equipped to crack any recruitment exams like UDC, LDC, VAO, VA, SI and DT in Puducherry Government as well as TNPSC, SSC, RRB and such other exams that are anticipated in the near or foreseeable future.</p>
        <p><b>The following subjects will be taught by way of a range of pre-recorded video classes, learning materials and online tests through “SUYAM I.A.S.” App :</b></p>
        <h5><b>PART-1</b></h5> 
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
<hr/>
<p>The above subjects will be taught by way of a range of pre-recorded video classes, learning materials and online tests through “SUYAM I.A.S.” App.</p>
<p>Teaching, board works, text materials and test papers will be bilingual, ie., both in Tamil and English for the ease of Puducherry aspirants.</p>
<p>You can find in “SUYAM I.A.S.” Mobile App —
<br/>
<b>Well delivered VIDEO CLASSES</b> – Dedicated faculty of the institute give importance to Conceptual clarity and innovative delivery of subjects.
<br/>
<b>Meticulously crafted E-NOTES</b> – Current affairs will be updated on weekly basis and General Knowledge and other materials considered to be helpful will be provided.
<br/>
<b>Carefully prepared DAILY TESTS and WEEKLY TESTS</b> – This most powerful online assessment tool gives you an exceptional and seamless online exam experience through Daily Tests and Weekly Tests based on the subjects covered, regularly.
<br/>
&nbsp;
<hr/>
Besides the above learning tools, well edited, exam oriented and bilingual (both in English and Tamil) books on the required subjects based on the Tamil Nadu Text Books (6th to 10th Standard) will be provided.</p>
<p>Register here to avail the benefits of Operation Red Kepi 2020, Special Coaching for Police Constable Exam in Puducherry through “SUYAM I.A.S.” Mobile App.</p>
<br/>
<p><b>Course Fee : Rs.7500</b></p>
<p>Register here to avail the benefits of Mission Perseverance 2020, Special Preparatory Course through “SUYAM I.A.S.” Mobile App.</p><br />
        <h4><b>Course Fee : Rs.7500</b></h4>
        <div className="mp__footer">
          <div className="mp__kpi">
            <Link to="/Register">
              <Button className="btn btn-default" type="link">REGISTER NOW</Button>
            </Link>
          </div>
          <div><img src="assets/rk.png" alt="mpvector" className="mp__vector"/></div>
        </div>
</div>;
    }
  }