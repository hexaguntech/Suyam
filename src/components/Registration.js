import React, { Component } from 'react';
import './Registration.css';
import ApplicantDataService from '../services/ApplicantDataService';
import axios from 'axios';
import FilesUploadComponent from './FileUploadComponent';

import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.saveApplication = this.saveApplication.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.onImageUpload = this.onImageUpload.bind(this);

    this.onChangeImage = this.onChangeImage.bind(this);

    this.state = {
      course: '',
      name: '',
      dob: '',
      gender: '',
      email: '',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      state: '',
      pincode: '',
      bloodGroup: '',
      bloodDonorVolunteer: false,
      studied: '',
      studying: '',
      working: '',
      verticalReservation: '',
      horizontalReservation: '',
      photoFile: '',
      photoPath: 'path',
      submitted: false,
      agree: false,
      counter: 0,
      photoLink: '',
    };
  }

  saveApplication() {
    // if (
    //   this.state.course == 'Select a option' ||
    //   this.state.gender == 'Select a option' ||
    //   this.state.horizontalReservation == 'Select a option' ||
    //   this.state.verticalReservation == 'Select a option'
    // ) {
    //   alert('choose the dropdowns');
    // } else {

    this.props.history.push({
      pathname: '/SubmitApplication',
      state: this.state,
    });
  }

  onImageUpload(e) {
    e.preventDefault();

    if (this.state.photoFile != '') {
      const formData = new FormData();
      formData.append('profileImg', this.state.photoFile);
      formData.append('name', this.state.name);

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios
        .post('http://localhost:8080/api/applicant/upload', formData, {})
        .then((response) => {
          alert('The file is successfully uploaded');
          this.setState({
            photoPath: response.data.userCreated.imagepath,
          });
          console.log(response);
          console.log(this.state.photoPath);
          this.setState({
            photoLink: 'http://localhost:8080/' + this.state.photoPath,
          });
        })
        .catch((error) => {});
    } else {
      alert('upload a image');
    }
  }

  onChangeImage(e) {
    this.setState({ photoFile: e.target.files[0] });
    console.log(this.state.photoFile);
    console.log(this.state.photoFile);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCheckClickBloodVol = () => {
    this.setState({
      bloodDonorVolunteer: !this.state.bloodDonorVolunteer,
    });
  };

  handleCheckClickAgreement = () => {
    this.setState({ agree: !this.state.agree });
  };

  render() {
    return (
      <div className="container mt3">
        <div className="header" style={{marginTop: `30px`}}>
          <h2 style={{ fontWeight: `700` }}>ONLINE REGISTRATION</h2>
          <hr color="black" className="col-sm-11" />
          <form className="col-sm" onSubmit={this.saveApplication}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>
                <b>
                  COURSES<span style={{ color: `red` }}>*</span>
                </b>
              </Form.Label>
              <Form.Control
                as="select"
                required
                name="course"
                onChange={this.handleChange}
              >
                <option>Select a option</option>
                <option>Mission perseverance 2020</option>
                <option>Operation Red KEPI 2020</option>
              </Form.Control>
              <hr />
              <Form.Group>
                <Form.Label>
                  <b>
                    My Name is<span style={{ color: `red` }}>*</span>
                  </b>
                </Form.Label>
                <Form.Control
                  as="input"
                  placeholder="Enter your name"
                  required
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                ></Form.Control>
              </Form.Group>
              <div className="row">
                <div className="col-sm-6">
                  <Form.Label>
                    <b>
                      Date of Birth<span style={{ color: `red` }}>*</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    as="input"
                    required
                    name="dob"
                    onChange={(event) => this.handleChange(event)}
                  ></Form.Control>
                </div>

                <div className="col-sm-6">
                  <Form.Label>
                    <b>
                      Gender<span style={{ color: `red` }}>*</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    required
                    name="gender"
                    onChange={this.handleChange}
                  >
                    <option>Select a option</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not say</option>
                  </Form.Control>
                </div>
              </div>
              <Form.Group>
                <div className="row">
                  <div className="col-sm-6">
                    <Form.Label>
                      <b>
                        Phone number<span style={{ color: `red` }}>*</span>
                      </b>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      required
                      name="phone"
                      onChange={(event) => this.handleChange(event)}
                    ></Form.Control>
                  </div>
                  <div className="col-sm-6">
                    <Form.Label>
                      <b>
                        Email<span style={{ color: `red` }}>*</span>
                      </b>
                    </Form.Label>
                    <Form.Control
                      as="input"
                      placeholder="name@example.com"
                      name="email"
                      onChange={this.handleChange}
                    ></Form.Control>
                  </div>
                </div>
              </Form.Group>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>
                  <b>
                    My Address<span style={{ color: `red` }}>*</span>
                  </b>
                </Form.Label>
                <Form.Control
                  required
                  placeholder="Line 1"
                  name="addressLine1"
                  onChange={(event) => this.handleChange(event)}
                />
                <Form.Label></Form.Label>
                <Form.Control
                  placeholder="Line 2"
                  name="addressLine2"
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Group>
              <Form.Group>
                <div className="row">
                  <div className="col-sm-6">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as="input"
                      placeholder="State"
                      name="state"
                      onChange={(event) => this.handleChange(event)}
                    ></Form.Control>
                  </div>
                  <div className="col-sm-6">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      as="input"
                      placeholder="Pincode"
                      name="pincode"
                      onChange={(event) => this.handleChange(event)}
                    ></Form.Control>
                  </div>
                </div>
              </Form.Group>
              <Form.Group>
                <div className="row col-sm-6">
                  <Form.Label>
                    <b>
                      Blood Group<span style={{ color: `red` }}>*</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    placeholder="State"
                    onChange={(event) => this.handleChange(event)}
                    name="bloodGroup"
                  >
                    <option>Select a option</option>
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
                <input
                  type="checkbox"
                  checked={this.state.bloodDonorVolunteer}
                  onChange={this.handleCheckClickBloodVol}
                  name="bloodDonorVol"
                />
                <h5>
                  I am willing to be a Voluntary Blood Donor and I may be
                  approached for the need of blood any patient in emergency
                </h5>
              </div>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  <b>
                    I studied<span style={{ color: `red` }}>*</span>
                  </b>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  required
                  name="studied"
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="input"
                  placeholder="additional qualications,if any"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <b>
                    I am now studying<span style={{ color: `red` }}>*</span>
                  </b>
                </Form.Label>
                <Form.Control
                  as="input"
                  required
                  name="studying"
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <b>
                    I am now working as<span style={{ color: `red` }}>*</span>
                  </b>
                </Form.Label>
                <Form.Control
                  as="input"
                  required
                  name="working"
                  onChange={(event) => this.handleChange(event)}
                />
              </Form.Group>

              <Form.Group>
                <div className="row">
                  <div className="col-sm-6">
                    <Form.Label>
                      <b>
                        I belong to (category for vertical reservation)
                        <span style={{ color: `red` }}>*</span>
                      </b>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      required
                      onChange={(event) => this.handleChange(event)}
                      name="verticalReservation"
                    >
                      <option>Select a option</option>

                      <option>General</option>
                      <option>OBC</option>
                      <option>MBC</option>
                      <option>SC</option>
                      <option>EBC</option>
                      <option>BCM</option>
                      <option>BT</option>
                    </Form.Control>
                  </div>
                  <div className="col-sm-6">
                    <Form.Label>
                      <b>
                        I am a/an (category for Horizontal Reservation)
                        <span style={{ color: `red` }}>*</span>
                      </b>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      required
                      onChange={(event) => this.handleChange(event)}
                      name="horizontalReservation"
                    >
                      <option>Select a option</option>
                      <option>XSM</option>
                      <option>PH</option>
                      <option>MSP</option>
                    </Form.Control>
                  </div>
                </div>
              </Form.Group>
              {/* <FilesUploadComponent /> */}
              <Form.Group>
                <div className="upload">
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Upload your picture"
                    required
                    onChange={this.onChangeImage}
                  />
                  <img
                    src={this.state.photoLink}
                    alt="Applicant photo"
                    width="130"
                    height="170"
                    style={{
                      marginTop: '20px',
                    }}
                  ></img>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.onImageUpload}
                  >
                    upload
                  </Button>
                </div>
              </Form.Group>
              <div className="tex">
                <div className="form-check-inline">
                  <label className="form-check-label" for="check1">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.agree}
                      onChange={this.handleCheckClickAgreement}
                      name="agreement"
                    />{' '}
                    I assure that I will put in utmost perseverance, preparation
                    and performance while looking forward to intellectual,
                    academic, material and moral support from the organizers/
                    faculty of the Coaching Programme I clearly understand that
                    only upon payment of course fee, my admission will be
                    confirmed. I clearly understand that fees once paid will not
                    be refunded under any circumstances.
                  </label>
                </div>
                <h6> </h6>
              </div>
              <div className="sub">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-default"

                  // onClick={this.saveApplication}
                  disabled={!this.state.agree}
                >
                  View Application
                </Button>
              </div>
            </Form.Group>
          </form>
        </div>
      </div>
    );
  }
}
