import React, { Component } from 'react';
import './Registration.css';
import ApplicantDataService from '../services/ApplicantDataService';
import axios from 'axios';
import { Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.saveApplication = this.saveApplication.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.onImageUpload = this.onImageUpload.bind(this);

    this.onChangeImage = this.onChangeImage.bind(this);

    this.handleClose = this.handleClose.bind(this);

    this.modalClick = this.modalClick.bind(this);

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
      additionalQualification: '',
      working: '',
      verticalReservation: '',
      horizontalReservation: '',
      photoFile: '',
      photoPath: 'path',
      submitted: false,
      agree: false,
      counter: 0,
      photoLink: '',

      modalShow: false,
    };
  }

  handleClose() {
    this.setState({
      modalShow: false,
    });
  }

  modalClick() {
    this.setState({
      modalShow: true,
    });
  }

  saveApplication(e) {
    e.preventDefault();

    if (this.state.photoLink != '') {
      this.props.history.push({
        pathname: '/SubmitApplication',
        state: this.state,
      });
    } else {
      alert('select a image and click upload');
    }
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
        .post('http://suyamias.com/api/applicant/upload', formData, {})
        .then((response) => {
          alert('The file is successfully uploaded');
          this.setState({
            photoPath: response.data.userCreated.imagepath,
          });
          console.log(response);
          console.log(this.state.photoPath);
          this.setState({
            photoLink: 'http://suyamias.com/' + this.state.photoPath,
          });
        })
        .catch((error) => {
          alert(error);
        });
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
      <div>
        <div className="proverb">
          <p style={{ textAlign: `center`, padding: `20px` }}>
            எண்ணித் துணிக கருமம் துணிந்தபின் <br />
            எண்ணுவம் என்பது இழுக்கு. .
          </p>
        </div>
        <div className="container mt3">
          <div className="header" style={{ marginTop: `30px` }}>
            <h2 style={{ fontWeight: `700` }}>ONLINE REGISTRATION</h2>
            <hr color="black" className="" />
            <form className="" onSubmit={this.saveApplication}>
              <Form.Group>
                <Form.Label>
                  <b>
                    Course<span style={{ color: `red` }}>*</span>
                  </b>
                </Form.Label>
                <Form.Control
                  as="select"
                  required
                  name="course"
                  onChange={this.handleChange}
                >
                  <option>Select</option>
                  <option>Mission Perseverance 2020</option>
                  <option>Operation Red Kepi 2020</option>
                </Form.Control>
                <hr />
                <Form.Group>
                  <Form.Label>
                    <b>
                      My Name is <span style={{ color: `red` }}>*</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    as="input"
                    placeholder="Enter your name"
                    required
                    value={this.state.name}
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                  ></Form.Control>
                </Form.Group>
                <div className="regrow">
                  <div className="smtag">
                    <Form.Label>
                      <b>
                        Date of Birth<span style={{ color: `red` }}>*</span>
                      </b>
                    </Form.Label>

                    <Form.Control
                      type="date"
                      as="input"
                      type="date"
                      required
                      name="dob"
                      placeholder="dd-mm-yyyy"
                      onChange={(event) => this.handleChange(event)}
                    ></Form.Control>
                  </div>

                  <div className="smtag">
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
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Prefer not say</option>
                    </Form.Control>
                  </div>
                </div>
                <Form.Group>
                  <div className="regrow">
                    <div className="smtag">
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
                    <div className="smtag">
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
                  <div className="regrow">
                    <div className="smtag">
                      <Form.Label>
                        <b>
                          State <span style={{ color: `red` }}>*</span>
                        </b>
                      </Form.Label>
                      <Form.Control
                        as="input"
                        placeholder="State"
                        name="state"
                        onChange={(event) => this.handleChange(event)}
                      ></Form.Control>
                    </div>
                    <div className="smtag">
                      <Form.Label>
                        <b>
                          Pincode <span style={{ color: `red` }}>*</span>
                        </b>
                      </Form.Label>
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
                  <div className="smtag">
                    <Form.Label>
                      <b>Blood Group</b>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      placeholder="State"
                      onChange={(event) => this.handleChange(event)}
                      name="bloodGroup"
                    >
                      <option>Select</option>
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
                  />{' '}
                  I am willing to be a Voluntary Blood Donor and I may be
                  approached for the need of blood any patient in emergency
                </div>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>
                    <b>
                      I studied<span style={{ color: `red` }}>*</span>
                    </b>
                  </Form.Label>
                  <Form.Control
                    as="input"
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
                    <b>I am now studying</b>
                  </Form.Label>
                  <Form.Control
                    as="input"
                    name="studying"
                    onChange={(event) => this.handleChange(event)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <span Glyphicon glyph="star">
                      {' '}
                    </span>
                    <b>I am now working as </b>
                  </Form.Label>
                  <Form.Control
                    as="input"
                    name="working"
                    onChange={(event) => this.handleChange(event)}
                  />
                </Form.Group>

                <Form.Group>
                  <div className="regrow">
                    <div className="smtag">
                      <Form.Label>
                        <b>
                          I belong to (category for Vertical Reservation)
                          <span style={{ color: `red` }}>*</span>
                        </b>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        required
                        onChange={(event) => this.handleChange(event)}
                        name="verticalReservation"
                      >
                        <option>Select</option>

                        <option>General</option>
                        <option>OBC</option>
                        <option>MBC</option>
                        <option>SC</option>
                        <option>ST</option>
                        <option>EBC</option>
                        <option>BCM</option>
                        <option>BT</option>
                      </Form.Control>
                    </div>
                    <div className="smtag">
                      <Form.Label>
                        <b>I am a/an (category for Horizontal Reservation)</b>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        onChange={(event) => this.handleChange(event)}
                        name="horizontalReservation"
                      >
                        <option>Select</option>
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
                    <b>
                      Upload image <span style={{ color: `red` }}>*</span>
                    </b>
                    <Form.File
                      id="exampleFormControlFile1"
                      required
                      onChange={this.onChangeImage}
                      style={{
                        marginTop: `15px`,
                      }}
                    />
                    <img
                      src={this.state.photoLink}
                      alt="Applicant photo"
                      width="130"
                      height="170"
                      hidden={() => {
                        if (this.state.photoLink != '') {
                          return true;
                        }

                        return false;
                      }}
                    ></img>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={this.onImageUpload}
                      style={{
                        marginTop: `5px`,
                      }}
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
                      I assure that I will put in utmost perseverance,
                      preparation and performance while looking forward to
                      intellectual, academic, material and moral support from
                      the organizers/ faculty of the Coaching Programme I
                      clearly understand that only upon payment of course fee,
                      my admission will be confirmed. I clearly understand that
                      fees once paid will not be refunded under any
                      circumstances.
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

        <Button variant="primary" onClick={this.modalClick}>
          Launch demo modal
        </Button>

        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Your Application Has Been Successfully Submitted!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your application is submitted successfully. Upon payment of your
            admission we will send you a confirmed confirmation mail.
            <br /> Please remember that only on payment of Course Fees, your
            admission will be confirmed.
            <br />
          </Modal.Body>
          <Modal.Footer
            style={{
              justifyContent: 'space-evenly',
            }}
          >
            <Button
              variant="primary"
              style={{ margin: `0px` }}
              onClick={this.handleClose}
            >
              Print pdf
            </Button>
            <Button
              variant="secondary"
              style={{ margin: `0px` }}
              onClick={this.handleClose}
            >
              Home
            </Button>
            <Button
              variant="primary"
              style={{ margin: `0px` }}
              onClick={this.handleClose}
            >
              Payment
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
