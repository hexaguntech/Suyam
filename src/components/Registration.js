import React from 'react';
import "./Registration.css";

import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
export default class Registration extends React.Component {
  render() {
    return  <div className="container col-sm">
    <div className="header col-sm">
    <h2>ONLINE REGISTRATION</h2>
    <hr color="black" className="col-sm-11" />
    <form className="col-sm">  
       <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label><b>COURSES*</b></Form.Label>
    <Form.Control as="select" required>
      <option>Mission perseverance 2020</option>
      <option>Operation Red KEPI 2020</option>
    
  </Form.Control>
  <hr/>
<Form.Group>
  <Form.Label><b>My Name is*</b></Form.Label>
  <Form.Control as="input" placeholder="Enter your name" required></Form.Control>
  </Form.Group>
  <div className="row">
  <div className="col-sm-6" >
  <Form.Label><b>I was born on*</b></Form.Label>
  <Form.Control as="input" required></Form.Control>
  </div>
  <div className="col-sm-6" >
  <Form.Label><b>Gender*</b></Form.Label>
  <Form.Control as="select" required>
  <option>Male</option>
  <option>Female</option>
  <option>Prefer not say</option>
  </Form.Control>
  </div>
  </div>  
 </Form.Group>
<Form.Group>
<div className="row">
  <div className="col-sm-6" >
  <Form.Label><b>Phone number*</b></Form.Label>
  <Form.Control as="input" required></Form.Control>
  </div>
  <div className="col-sm-6" >
  <Form.Label><b>Email*</b></Form.Label>
  <Form.Control as="input" placeholder="name@example.com">
  </Form.Control>
  </div>
  </div>  
</Form.Group> 
<Form.Group controlId="formGridAddress1">
    <Form.Label><b>My Address*</b></Form.Label>
    <Form.Control placeholder="Line 1" />
    <Form.Label></Form.Label>
    <Form.Control placeholder="Line 2"/>
    </Form.Group>
    <Form.Group>
<div className="row">
  <div className="col-sm-6" >
  <Form.Label></Form.Label>
  <Form.Control as="input" placeholder="State"></Form.Control>
  </div>
  <div className="col-sm-6" >
  <Form.Label></Form.Label>
  <Form.Control as="input" placeholder="Pincode">

  </Form.Control>
  </div>
  </div>  
</Form.Group> 
<Form.Group>
  <div className="row col-sm-6">
  <Form.Label><b>Blood Group*</b></Form.Label>
  <Form.Control as="select" placeholder="State">
  <option>A+</option>
  <option>A-</option>
  <option>B+</option>
  <option>B-</option>
  <option>O+</option>
  <option>O-</option>
  <option>AB+</option>
  <option>AB-</option>
  </Form.Control>
  </div>
</Form.Group>
 <div className="volun"> 
 <h5>I am willing to be a Voluntary Blood Donor and I may be approached for the need of blood any patient in emergency</h5>
</div>

<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label><b>I studied*</b></Form.Label>
    <Form.Control as="textarea" rows="3"required/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
<Form.Control as="input" placeholder="additional qualications,if any"/>
  </Form.Group>
  <Form.Group>
  <Form.Label><b>Iam now Studying*</b></Form.Label>
    <Form.Control as="input" required />
   </Form.Group>
   <Form.Group>
  <Form.Label><b>Iam now Working as*</b></Form.Label>
    <Form.Control as="input" required />
   </Form.Group>

<Form.Group>
<div className="row">
  <div className="col-sm-6" >
  <Form.Label><b>i belong to (category for vertical reservation)*</b></Form.Label>
  <Form.Control as="select" required>
  <option>Yes</option>
  <option>No</option>
  </Form.Control>
  </div>
  <div className="col-sm-6" >
  <Form.Label><b>Iam a/an (category for Horizontal Reservation)*</b></Form.Label>
  <Form.Control as="select" required>
  <option>Yes</option>
  <option>No</option>
  </Form.Control>
  </div>
  </div>  
</Form.Group> 
<Form.Group>
    <div className="upload">
    <Form.File id="exampleFormControlFile1" label="Upload your picture" required/>
    </div>
  </Form.Group>
  <div className="tex">
  <h6> assure that I will put in utmost perseverance, preparation and performance while looking forward to intellectual, academic, material and moral support from the organizers/ faculty of the Coaching Programme
I clearly understand that only upon payment of course fee, my admission will be confirmed. I clearly understand that fees once paid will not be refunded under any circumstances.</h6>
  </div>
  <div className="sub">
  <Button variant="primary" type="submit">
    Submit
  </Button>
 </div>
</form>   
</div>
</div>
}
}
