import React, { Component } from 'react';
import './Registration.css';
import ApplicantDataService from '../services/ApplicantDataService';
import axios from 'axios';
import { Form, Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Application } from './Application';
import { DropDownList } from '@progress/kendo-react-dropdowns';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.saveApplication = this.saveApplication.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.onImageUpload = this.onImageUpload.bind(this);

    this.onChangeImage = this.onChangeImage.bind(this);

    this.handleClose = this.handleClose.bind(this);

    this.modalClick = this.modalClick.bind(this);
    this.appClick = this.appClick.bind(this);

    this.homePageClick = this.homePageClick.bind(this);
    this.paymentPageClick = this.paymentPageClick.bind(this);

    this.applicationPreview = this.applicationPreview.bind(this);

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
      agree: false,
      photoLink: '',

      modalShow: false,
      appmodal: false,
      submitted: false,
      success: false,
    };
  }

  handleClose() {
    this.setState({
      modalShow: false,
      appmodal: false,
    });
  }

  modalClick() {
    this.setState({
      modalShow: true,
    });
  }

  appClick() {
    this.setState({
      appmodal: true,
    });
  }

  homePageClick() {
    this.props.history.push({
      pathname: '/home',
    });
  }

  paymentPageClick() {
    this.props.history.push({
      pathname: '/Payment',
    });
  }

  applicationPreview(e) {
    e.preventDefault();

    if (this.state.course == '') {
      alert('select a course');
      window.scrollTo(0, 0);
    } else if (this.state.gender == '') {
      alert('select your gender');
      window.scrollTo(0, 0);
    } else if (this.state.verticalReservation == '') {
      alert('select vertical reservation');
    } else if (this.state.photoLink != '') {
      this.appClick();
    } else {
      alert('select a image and click upload');
    }

    this.setState({
      dob: this.state.dob.split('-').reverse().join('-'),
    });

    if (this.state.bloodGroup == '' || this.state.bloodGroup == 'Select') {
      this.setState({
        bloodGroup: '-',
      });
    }

    if (
      this.state.horizontalReservation == '' ||
      this.state.horizontalReservation == 'Select'
    ) {
      this.setState({
        horizontalReservation: '-',
      });
    }
  }

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // saveApplication(e) {
  //   e.preventDefault();
  //   // if (
  //   //   this.state.course == 'Select a option' ||
  //   //   this.state.gender == 'Select a option' ||
  //   //   this.state.horizontalReservation == 'Select a option' ||
  //   //   this.state.verticalReservation == 'Select a option'
  //   // ) {
  //   //   alert('choose the dropdowns');
  //   // } else {
  //   if (this.state.photoLink != '') {
  //     this.props.history.push({
  //       pathname: '/SubmitApplication',
  //       state: this.state,
  //     });
  //   } else {
  //     alert('select a image and click upload');
  //   }
  // }

  saveApplication() {
    var data = {
      course: this.state.course,
      name: this.state.name,
      dob: this.state.dob,
      gender: this.state.gender,
      email: this.state.email,
      phone: this.state.phone,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      state: this.state.state,
      pincode: this.state.pincode,
      bloodGroup: this.state.bloodGroup,
      bloodDonorVolunteer: this.state.bloodDonorVolunteer,
      studied: this.state.studied,
      studying: this.state.studying,
      additionalQualification: this.state.additionalQualification,
      working: this.state.working,
      belongTo: this.state.belongTo,
      verticalReservation: this.state.verticalReservation,
      horizontalReservation: this.state.horizontalReservation,
      photoPath: this.state.photoLink,
    };

    console.log(data);

    ApplicantDataService.registerApplicant(data)
      .then((data) => {
        // this.setState({
        //   submitted: false,
        //   course: '',
        //   name: '',
        //   dob: '',
        //   gender: '',
        //   email: '',
        //   phone: '',
        //   addressLine1: '',
        //   addressLine2: '',
        //   state: '',
        //   pincode: '',
        //   bloodGroup: '',
        //   bloodDonorVolunteer: false,
        //   studied: '',
        //   studying: '',
        //   additionalQualification: '',
        //   working: '',
        //   verticalReservation: '',
        //   horizontalReservation: '',
        //   photoFile: '',
        //   photoPath: 'path',
        //   agree: false,
        //   photoLink: '',
        // });

        this.modalClick();
      })
      .catch((e) => {
        console.log(e);
        alert('some error occured, try again');
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
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  }

  handleCheckClickBloodVol = () => {
    this.setState({
      bloodDonorVolunteer: !this.state.bloodDonorVolunteer,
    });
  };

  handleCheckClickAgreement = () => {
    this.setState({ agree: !this.state.agree });
  };

  d_courses = ['Mission Perseverance 2020', 'Operation Red Kepi 2020'];
  d_gender = ['Male', 'Female', 'Prefer not to say'];
  d_bloodgroup = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  d_verticalreservation = [
    'General',
    'OBC',
    'MBC',
    'SC',
    'ST',
    'EBC',
    'BCM',
    'BT',
  ];

  render() {
    return (
      <div>
        <div className="proverb">
          <p style={{ marginBottom: `0px` }}>
            எண்ணித் துணிக கருமம் துணிந்தபின் <br />
            எண்ணுவம் என்பது இழுக்கு. .<br />
            <p
              style={{
                float: `right`,
                marginBottom: `0px`,
                fontStyle: 'italic',
              }}
            >
              {' '}
              ... குறள்
            </p>
          </p>
        </div>
        <div className="container mt3">
          <div className="header" style={{ marginTop: `30px` }}>
            <h2 style={{ fontWeight: `700` }}>ONLINE REGISTRATION</h2>
            <hr color="black" className="bline" />
            <p style={{ color: `red` }}>* Fields are mandatory</p>
            <form className="" onSubmit={this.applicationPreview}>
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
                  <option disabled selected>
                    Select
                  </option>
                  <option>Mission Perseverance 2020</option>
                  <option>Operation Red Kepi 2020</option>
                </Form.Control>
                {/* <DropDownList
                  className="mb-3"
                  style={{ width: '100%' }}
                  label=""
                  name="course"
                  data={this.d_courses}
                  required={true}
                  onChange={this.handleChange}
                /> */}
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
                    value={this.state.name}
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                    required
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
                      required
                      name="dob"
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
                      placeholder="select"
                      name="gender"
                      onChange={this.handleChange}
                    >
                      <option disabled selected>
                        Select
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Prefer not say</option>
                    </Form.Control>
                    {/* <DropDownList
                      style={{ width: '100%' }}
                      label=""
                      name="gender"
                      data={this.d_gender}
                      required={true}
                      onChange={this.handleChange}
                    /> */}
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
                        type="number"
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
                        required
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
                        required
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
                        required
                      ></Form.Control>
                    </div>
                  </div>
                </Form.Group>
                <Form.Group>
                  <div className="smtag">
                    <Form.Label>
                      <b>Blood Group</b>
                    </Form.Label>
                    {/* <DropDownList
                      style={{ width: '100%' }}
                      label=""
                      name="bloodgroup"
                      data={this.d_bloodgroup}
                      required={true}
                      onChange={this.handleChange}
                    /> */}
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
                    name="additionalQualification"
                    onChange={(event) => this.handleChange(event)}
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
                      {/* <DropDownList
                        style={{ width: '100%' }}
                        label=""
                        name="verticalreservation"
                        data={this.d_verticalreservation}
                        required={true}
                        onChange={this.handleChange}
                      /> */}
                      <Form.Control
                        as="select"
                        required
                        onChange={(event) => this.handleChange(event)}
                        name="verticalReservation"
                      >
                        <option value="1" disabled selected>
                          Select
                        </option>
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
                      the organizers/ faculty of the Coaching Programme. I
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
        {/* 
        <Button variant="primary" onClick={this.appClick}>
          Launch demo modal
        </Button> */}

        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Welcome <b>{this.state.name},</b>{' '}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your application for the course, <b>{this.state.course}</b> has been
            successfully submitted.
            <br />
            Please remember that only on payment of course fees, your admission
            will be confirmed
            <br />
            (SUYAM ADMINISTRATION)
            <br />
          </Modal.Body>
          <Modal.Footer
            style={{
              justifyContent: 'space-evenly',
            }}
          >
            {
              <PDFDownloadLink
                document={
                  <Application
                    course={this.state.course}
                    name={this.state.name}
                    dob={this.state.dob}
                    gender={this.state.gender}
                    email={this.state.email}
                    phone={this.state.phone}
                    addressLine1={this.state.addressLine1}
                    addressLine2={this.state.addressLine2}
                    state={this.state.state}
                    pincode={this.state.pincode}
                    bloodGroup={this.state.bloodGroup}
                    bloodDonorVolunteer={this.state.bloodDonorVolunteer}
                    studied={this.state.studied}
                    studying={this.state.studying}
                    additionalQualification={this.state.additionalQualification}
                    working={this.state.working}
                    horizontalReservation={this.state.horizontalReservation}
                    verticalReservation={this.state.verticalReservation}
                    photoLink={this.state.photoLink}
                  />
                }
                fileName="Application.pdf"
                style={{
                  textDecoration: 'none',
                  padding: '6px',
                  color: 'white',
                  backgroundColor: '#0a79df',
                  border: '1px solid #0a79df',
                  borderRadius: `5px`,
                }}
              >
                {' '}
                Print Application
              </PDFDownloadLink>
            }

            <Button
              variant="secondary"
              style={{ margin: `0px` }}
              onClick={this.homePageClick}
            >
              HOME
            </Button>
            <Button
              variant="primary"
              style={{ margin: `0px` }}
              onClick={this.paymentPageClick}
            >
              PAYMENT
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={this.state.appmodal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Application Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.state.photoLink}
              alt="Applicant photo"
              width="130"
              height="170"
              style={{
                margin: '20px',
              }}
            ></img>
            {/* <div>
              <p>I opted for the course {this.state.course}</p>
              <br />
              <p>My name is {this.state.name}</p>
              <br />
              <p>Gender: {this.state.gender}</p>
              <br />
              <p>
                My Address is {this.state.addressLine1},{' '}
                {this.state.addressLine2}, {this.state.city}
                {this.state.state}, {this.state.pincode}.
              </p>
              <br />
              <p>My Mobile No. is {this.state.phone}</p>
              <br />
              <p>My E-mail ID is {this.state.email}</p>
              <br />
              <p>My Blood Group {this.state.bloodGroup}</p>
              <br />
              <p>I studied {this.state.studied}</p>
              <br />
              <p>
                My Additional qualifications are{' '}
                {this.state.additionalQualification}
              </p>
              <br />
              <p>I am now Studying {this.state.studying}</p>
              <br />
              <p>I am now working {this.state.working}</p>
              <br />
              <p>
                I belong to (category for Vertical Reservation){' '}
                {this.state.verticalReservation}
              </p>
              <br />
              <p>
                I am a / an (category for Horizontal Reservation){' '}
                {this.state.horizontalReservation}
              </p>
              <br />
              <p>
                I assure that I will put in utmost perseverance, preparation and
                performance while looking forward to intellectual, academic,
                material and moral support from the organizers/ faculty of the
                Coaching Programme. I clearly understand that only upon payment
                of course fee, my admission will be confirmed. I clearly
                understand that fees once paid will not be refunded under any
                circumstances.
              </p>
              <br />
              <p>
                I clearly understand that only upon payment of course fee, my
                admission will be confirmed.
              </p>
              <br />
              <p>
                I clearly understand that fees once paid will not be refunded
                under any circumstances.
              </p>
              <br />
            </div> */}
            <Table bordered size="sm">
              <tbody>
                <tr>
                  <th>Selected Course</th>
                  <td>{this.state.course}</td>
                </tr>
                <tr>
                  <th>My Name is</th>
                  <td>{this.state.name}</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <td>{this.state.dob}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{this.state.email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{this.state.phone}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    {this.state.addressLine1}, {this.state.addressLine2},{' '}
                    {this.state.city}, {this.state.state}, {this.state.pincode}.
                  </td>
                </tr>
                <tr>
                  <th>Blood Group</th>
                  <td>{this.state.bloodGroup}</td>
                </tr>
                <tr>
                  <th>Volunteering Blood Donor</th>
                  {this.state.bloodDonorVolunteer == true ? (
                    <td>Yes</td>
                  ) : (
                    <td>No</td>
                  )}
                </tr>
                <tr>
                  <th>I studied</th>
                  <td>{this.state.studied}</td>
                </tr>
                <tr>
                  <th>I am now Studying</th>
                  <td>{this.state.studying}</td>
                </tr>
                <tr>
                  <th>I am working as</th>
                  <td>{this.state.working}</td>
                </tr>
                <tr>
                  <th>I belong to (Vertical Reservation)</th>
                  <td>{this.state.verticalReservation}</td>
                </tr>
                <tr>
                  <th>I am an (Horizontal Reservation)</th>
                  <td>{this.state.horizontalReservation}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer
            style={{
              justifyContent: 'space-evenly',
            }}
          >
            <Button
              variant="secondary"
              style={{ margin: `0px` }}
              onClick={this.handleClose}
            >
              Edit
            </Button>
            <Button
              variant="primary"
              style={{ margin: `0px` }}
              onClick={this.saveApplication}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
