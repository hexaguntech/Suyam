import React from 'react';
import { Button } from 'react-bootstrap';
import './SubmitApplication.css';

export default class SubmitApplication extends React.Component {
  constructor(props) {
    super(props);

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
      studying: '',
      working: '',
      belongTo: '',
      verticalReservation: '',
      horizontalReservation: '',
      photoFile: '',
      submitted: false,
      agree: false,
    };
  }
  render() {
    return (
      <div className="container mt3">
        <h1 style={{ color: `#0A79DF`, fontWeight: `700` }}>
          My Profile & Application
        </h1>
        <div className="sa__imagecon"></div>
        <div className="sa__table">
          <table>
            <tr>
              <td>Selected Course</td>
              <td></td>
            </tr>
            <tr>
              <td>My Name is</td>
              <td></td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td></td>
            </tr>
            <tr>
              <td>Email</td>
              <td></td>
            </tr>
            <tr>
              <td>Phone</td>
              <td></td>
            </tr>
            <tr>
              <td>Address</td>
              <td></td>
            </tr>
            <tr>
              <td>Blood Group</td>
              <td></td>
            </tr>
            <tr>
              <td>Volunteering Blood Donor</td>
              <td></td>
            </tr>
            <tr>
              <td>I studied</td>
              <td></td>
            </tr>
            <tr>
              <td>I am now Studying</td>
              <td></td>
            </tr>
            <tr>
              <td>I am working as</td>
              <td></td>
            </tr>
            <tr>
              <td>I belong to</td>
              <td></td>
            </tr>
            <tr>
              <td>I am an</td>
              <td></td>
            </tr>
          </table>
          <Button className="btn btn-default" type="submit">
            SUBMIT
          </Button>
        </div>
      </div>
    );
  }
}
